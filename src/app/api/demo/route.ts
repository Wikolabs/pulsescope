import { NextResponse } from "next/server";
import { chat, isConfigured } from "@/lib/llm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM_PROMPT_FR = `Tu es PulseScope, un agent IA de veille marche pour dirigeants B2B. Tu produis un briefing executif quotidien sur les concurrents d'un utilisateur, dans le style des messages Slack de comite strategique : structure, factuel, actionnable.

Format de sortie exact en MARKDOWN :
**🎯 Faits du jour**
- [3-4 puces, chaque puce mentionne un concurrent et une nouvelle observable (levee, lancement, recrutement strategique, partenariat...)]

**🧠 Insights cles**
- [2-3 puces interpretant les faits, lien de cause a effet, signaux faibles]

**⚡ Actions recommandees**
- [2-3 puces concretes, verbe d'action, equipe destinataire entre crochets]

Tu DOIS inventer des faits realistes pour la demo (pas de "je n'ai pas access internet"). Tu joues le role d'un analyste senior qui a fait son scan ce matin. Reste sobre, evite l'enthousiasme commercial. Maximum 350 mots.`;

const SYSTEM_PROMPT_EN = `You are PulseScope, an AI market intelligence agent for B2B executives. You produce a daily executive briefing on the user's competitors, in the style of strategy committee Slack messages: structured, factual, actionable.

Exact MARKDOWN output format:
**🎯 Today's facts**
- [3-4 bullets, each mentions a competitor and an observable news (raise, launch, strategic hire, partnership...)]

**🧠 Key insights**
- [2-3 bullets interpreting the facts, causality, weak signals]

**⚡ Recommended actions**
- [2-3 concrete bullets, action verb, target team in brackets]

You MUST invent realistic facts for the demo (no "I have no internet access"). You're playing a senior analyst who ran the scan this morning. Stay sober, avoid commercial enthusiasm. Maximum 350 words.`;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const competitors: string[] = Array.isArray(body.competitors) ? body.competitors.slice(0, 5) : [];
    const lang: "fr" | "en" = body.lang === "en" ? "en" : "fr";

    if (!competitors.length) {
      return NextResponse.json(
        { error: lang === "fr" ? "Entrez au moins un concurrent." : "Enter at least one competitor." },
        { status: 400 }
      );
    }

    if (!isConfigured()) {
      return NextResponse.json(
        {
          error: "llm_not_configured",
          message: lang === "fr"
            ? "Demo en mode statique — la cle LLM sera configuree au prochain deploiement."
            : "Static demo mode — LLM key will be configured at next deploy.",
          mockBrief: buildMockBrief(competitors, lang),
        },
        { status: 200 }
      );
    }

    const userMsg = lang === "fr"
      ? `Concurrents a surveiller aujourd'hui : ${competitors.join(", ")}. Genere le briefing executif du jour.`
      : `Today's competitors to monitor: ${competitors.join(", ")}. Generate today's executive briefing.`;

    const { text, model } = await chat(
      [
        { role: "system", content: lang === "fr" ? SYSTEM_PROMPT_FR : SYSTEM_PROMPT_EN },
        { role: "user", content: userMsg },
      ],
      900
    );

    return NextResponse.json({ brief: text, model, generatedAt: new Date().toISOString() });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "unknown";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

function buildMockBrief(competitors: string[], lang: "fr" | "en"): string {
  const [c1, c2, c3] = [competitors[0] ?? "ConcurrentA", competitors[1] ?? "ConcurrentB", competitors[2] ?? "ConcurrentC"];
  if (lang === "en") {
    return `**🎯 Today's facts**\n- ${c1} announced a $14M Series A led by Tier-1 European fund. Roadmap shifts to enterprise mid-market.\n- ${c2} launched a public API yesterday. 3 new integrations live (Slack, Notion, Linear).\n- ${c3} hired a former VP Sales from a leading competitor. Strong sales push expected H2.\n\n**🧠 Key insights**\n- The combined ${c1} raise + ${c2} API launch signals the segment moving from product-led to platform-led.\n- ${c3}'s hire pattern matches their last 2 enterprise pushes — territory expansion in DACH likely.\n\n**⚡ Recommended actions**\n- Accelerate own enterprise tier release — feature parity check vs ${c1} this week [Product]\n- Audit API surface and write competitive doc vs ${c2} [Engineering]\n- Brief sales on ${c3} talk track — anticipate procurement comparisons [Sales]`;
  }
  return `**🎯 Faits du jour**\n- ${c1} a leve 12M EUR en Serie A menee par un fonds europeen Tier-1. Roadmap recentree sur l'entreprise mid-market.\n- ${c2} a lance une API publique hier. 3 nouvelles integrations live (Slack, Notion, Linear).\n- ${c3} recrute un ex-VP Sales d'un concurrent majeur. Forte poussee commerciale attendue H2.\n\n**🧠 Insights cles**\n- La combinaison levee de ${c1} + lancement API ${c2} indique que le segment passe d'un modele product-led a platform-led.\n- Le pattern de recrutement de ${c3} colle a leur 2 derniers pushes enterprise — extension DACH probable.\n\n**⚡ Actions recommandees**\n- Accelerer la sortie du tier enterprise — verif parite features vs ${c1} cette semaine [Produit]\n- Auditer la surface API et rediger un comparatif vs ${c2} [Engineering]\n- Briefer sales sur ${c3} — anticiper les comparaisons en achat [Commercial]`;
}
