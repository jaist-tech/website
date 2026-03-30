export const ja = {
    top: {
        title: "JAIST Tech サークル",
        catchphrase: "「作りたい」を形にする。",
        about: [
            "北陸先端科学技術大学院大学公認の技術系サークル",
            "アプリ開発、ハッカソン、AI、電子工作など",
            "楽しみながらスキルを磨いていける場所を目指しています！"
        ],
        activities: {
            title: "Activities",
            weekly: "Weekly Activities",
            weeklyDetail: "水曜日・土曜日 18:00〜",
            weeklyNote: "自由参加 / オンライン・対面どちらでも参加可能",
            events: "Events",
            eventDate: "開催時期",
            sakuraHackathon: {
                iconEmoji: "🌸",
                title: "桜ハッカソン",
                date: "6月中旬",
                description: "春に開催されるチーム開発形式のハッカソンです。新メンバーも参加しやすく、仲間を増やしながら開発経験を積める、交流と挑戦のきっかけになるイベントです。",
            },
            jaistFestival: {
                iconEmoji: "🎟️",
                title: "JAISTフェスティバル",
                date: "10月下旬",
                description: "JAISTで行われる学園祭にサークルで制作した作品やアプリケーションを展示します。日頃の活動成果を学内外の来場者に向けて発信できる貴重な機会です。",
            },
            snowHackathon: {
                iconEmoji: "❄️",
                title: "雪ハッカソン",
                date: "2月初旬",
                description: "冬に開催されるチーム開発形式のハッカソンです。約一年間の活動で身につけた知識や技術を活かして開発に取り組み、自分たちの成長を実感できるイベントです。",
            },
            lt: {
                iconEmoji: "⚡",
                title: "LT会",
                date: "不定期",
                description: "メンバーの希望に応じて開催される、短時間のプレゼンイベントです。技術的な話題から趣味の話まで自由なテーマで発表でき、気軽に交流も楽しめます。",
            },
            others: "そのほかにも勉強会や他大学との交流会なども行われています！",
        },
        news: "News",
        link: "Official Link",
    },
    projects: {
        title: "Projects",
        noResults: "条件に一致するプロジェクトが見つかりませんでした。",
        searchPlaceholder: "キーワードを入力",
        searchSubmitLabel: "Enterで検索",
    },
    footer: {
        jaistOfficial: "北陸先端科学技術大学院大学公式サイト",
    },
} as const;

export type ActivitiesContent = typeof ja.top.activities;
