import { Animal } from '../types';

export const animals: Animal[] = [
  {
    "id": "01",
    "name": "Lion",
    "japaneseName": "ライオン",
    "description": "ライオンは、大型で社交的なネコ科の動物で、威厳ある姿と複雑な社会構造で知られています。彼らはサハラ以南のアフリカのサバンナ、草原、開けた森林地帯、そしてインドの一部地域に生息しています。",
    "imageUrl": "/images/lion.jpg",
    "traits": {
      "social": {
        "level": "high",
        "evidence": [
          {
            "description": "ライオンは、関連する雌とその子供たち、さらに少数の成体の雄からなる群れ（プライド）を形成して生活する唯一の大型ネコ科動物です。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "territorial": {
        "level": "high",
        "evidence": [
          {
            "description": "雄ライオンは、自分たちの縄張りを侵入者から守るため、プライドの領域を守る激しい争いにしばしば参加します。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "aggressive": {
        "level": "medium",
        "evidence": [
          {
            "description": "ライオンの攻撃性は状況によって異なり、縄張り争いや交尾相手を巡る競争の際に見られることが多いです。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "playful": {
        "level": "medium",
        "evidence": [
          {
            "description": "模擬的な忍び寄りや飛びかかりなどの遊び行動は、子ライオンに一般的に見られ、成体になっても続くことがあります。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "nocturnal": {
        "level": "medium",
        "evidence": [
          {
            "description": "ライオンは主に夜行性の狩人であり、涼しい気温と暗がりを利用して獲物を待ち伏せします。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "loyal": {
        "level": "medium",
        "evidence": [
          {
            "description": "雄ライオンは、しばしば血縁関係にある仲間と連携し、協力してプライドへのアクセスを確保し、防衛するための連合を形成します。これにより、強い社会的絆と協力行動が見られます。",
            "title": "Male reproductive alliances",
            "source": "https://en.wikipedia.org/wiki/Male_reproductive_alliances"
          }
        ]
      },
      "vocal": {
        "level": "high",
        "evidence": [
          {
            "description": "ライオンは、咆哮、うなり声、呻き声など様々な鳴き声を用いて、プライド内でのコミュニケーションや侵入者への威嚇を行います。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "curious": {
        "level": "medium",
        "evidence": [
          {
            "description": "ライオンは、新しい物体や環境の変化に対して好奇心を示し、これが彼らの相互作用や飼育下での福祉に影響を与えることがあります。",
            "title": "Effects of Personality and Rearing-History on the Welfare of Captive Asiatic Lions",
            "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7007979/"
          }
        ]
      },
      "hierarchical": {
        "level": "high",
        "evidence": [
          {
            "description": "ライオンのプライドは階層構造を持っており、優勢な雄がリーダーとして、雌は狩猟や子育てなど特定の役割を担っています。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "independent": {
        "level": "low",
        "evidence": [
          {
            "description": "ライオンは狩猟、保護、子育てのためにプライドに大きく依存しており、独立性は低いと言えます。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "protective": {
        "level": "high",
        "evidence": [
          {
            "description": "雄ライオンはプライドを守るために、競合する雄やその他の脅威から仔ライオンと縄張りを防衛します。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      },
      "energetic": {
        "level": "medium",
        "evidence": [
          {
            "description": "狩りの際に一時的に活発になることもありますが、ライオンはエネルギーを節約するために一日の大半を休息に費やします。",
            "title": "Lion",
            "source": "https://en.wikipedia.org/wiki/Lion"
          }
        ]
      }
    }
  },
  {
    "id": "02",
    "name": "Gorilla",
    "japaneseName": "ゴリラ",
    "description": "ゴリラは現存する最大の霊長類で、その強固な社会構造と複雑な行動で知られています。サハラ以南の中央部の森林に生息し、東部ゴリラと西部ゴリラの2種類に分かれます。",
    "imageUrl": "/images/gorilla.jpg",
    "traits": {
      "social": {
        "level": "high",
        "evidence": [
          {
            "description": "ゴリラは通常、背中に銀色の毛を持つ雄（シルバーバック）が率いる群れ（トゥループ）で生活しており、強い社会構造を示しています。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          },
          {
            "description": "社交的なゴリラは、他のゴリラとの交流を強く望み、共感、愛情、優しさが豊かであることが特徴です。",
            "title": "New study sheds light on mountain gorilla personalities",
            "source": "https://gorillafund.org/uncategorized/new-study-sheds-light-on-mountain-gorilla-personalities/"
          }
        ]
      },
      "territorial": {
        "level": "low",
        "evidence": [
          {
            "description": "ゴリラは縄張り意識があまり強くなく、隣接する群れ同士で生息域が重なることが多いです。",
            "title": "Western lowland gorilla",
            "source": "https://en.wikipedia.org/wiki/Western_lowland_gorilla"
          }
        ]
      },
      "aggressive": {
        "level": "medium",
        "evidence": [
          {
            "description": "普段は穏やかですが、特にシルバーバック同士の争いの際には攻撃的な行動を示すことがあります。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          },
          {
            "description": "理解力が低いと評価されたゴリラは、非接触型の攻撃行動を起こす傾向がありました。",
            "title": "Gorilla Behavior Index revisited: Age, housing and behavior",
            "source": "https://www.sciencedirect.com/science/article/abs/pii/S0168159105001498"
          }
        ]
      },
      "playful": {
        "level": "high",
        "evidence": [
          {
            "description": "3歳から6歳の若いゴリラは、日中の多くを遊び、木登りをし、追いかけっこをし、枝から枝へとぶら下がるなどして過ごします。",
            "title": "Western lowland gorilla",
            "source": "https://en.wikipedia.org/wiki/Western_lowland_gorilla"
          }
        ]
      },
      "nocturnal": {
        "level": "low",
        "evidence": [
          {
            "description": "ゴリラは昼行性で、日中に活動し、夜は自ら作った巣で休みます。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          }
        ]
      },
      "loyal": {
        "level": "high",
        "evidence": [
          {
            "description": "シルバーバックが雌と築く絆はゴリラの社会生活の中心となっており、グループ内の強い忠誠心を示しています。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          }
        ]
      },
      "vocal": {
        "level": "high",
        "evidence": [
          {
            "description": "ゴリラは、密生した植生の中での群れ内コミュニケーションに主に用いられる、25種類の異なる鳴き声を持っています。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          }
        ]
      },
      "curious": {
        "level": "medium",
        "evidence": [
          {
            "description": "開放性が高いゴリラは、探検を好み、創造的で衝動的、活動的で感情が安定せず、用心深さに欠ける傾向があります。",
            "title": "New study sheds light on mountain gorilla personalities",
            "source": "https://gorillafund.org/uncategorized/new-study-sheds-light-on-mountain-gorilla-personalities/"
          }
        ]
      },
      "hierarchical": {
        "level": "high",
        "evidence": [
          {
            "description": "ゴリラの群れは、意思決定や争いの仲裁、移動の指示を行う優勢なシルバーバックによって率いられています。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          }
        ]
      },
      "independent": {
        "level": "low",
        "evidence": [
          {
            "description": "ゴリラは群れでの生活に大きく依存しており、その独立性は低いです。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          }
        ]
      },
      "protective": {
        "level": "high",
        "evidence": [
          {
            "description": "シルバーバックは、捕食者やその他の危険にさらされた際、自らの命をかけても群れを守ります。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          }
        ]
      },
      "energetic": {
        "level": "medium",
        "evidence": [
          {
            "description": "ゴリラは日中の多くを採餌や移動に費やす一方で、休息の時間も設けており、適度な活動レベルを示しています。",
            "title": "Gorilla",
            "source": "https://en.wikipedia.org/wiki/Gorilla"
          }
        ]
      }
    }
  },
  {
    "id": "03",
    "name": "Wolf",
    "japaneseName": "オオカミ",
    "description": "オオカミ（Canis lupus）は、非常に社交的で適応力の高い肉食獣で、複雑な群れの構造と行動で知られています。北半球の様々な生態系に生息し、生態系のバランス維持に重要な役割を果たしています。",
    "imageUrl": "/images/wolf.jpg",
    "traits": {
      "social": {
        "level": "high",
        "evidence": [
          {
            "description": "オオカミは最も協力的なイヌ科動物の一つであり、狩り、縄張りの防衛、子育てなどを一つのユニットとして行います。",
            "title": "Back to the Future: A Glance Over Wolf Social Behavior to Understand Dog–Human Relationship",
            "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6912837/"
          }
        ]
      },
      "territorial": {
        "level": "high",
        "evidence": [
          {
            "description": "オオカミは縄張り意識が強く、資源へのアクセスを維持するために侵入者から縄張りを守ります。",
            "title": "Back to the Future: A Glance Over Wolf Social Behavior to Understand Dog–Human Relationship",
            "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6912837/"
          }
        ]
      },
      "aggressive": {
        "level": "medium",
        "evidence": [
          {
            "description": "オオカミは縄張りや群れのメンバーを守る際に攻撃的な行動を示すことがありますが、争いの後には和解などの戦略も取ります。",
            "title": "Back to the Future: A Glance Over Wolf Social Behavior to Understand Dog–Human Relationship",
            "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6912837/"
          }
        ]
      },
      "playful": {
        "level": "high",
        "evidence": [
          {
            "description": "成体のオオカミは、実際の戦いに似た遊びの喧嘩を行い、行動を調整しながら仲間の意図を読み取ります。",
            "title": "Back to the Future: A Glance Over Wolf Social Behavior to Understand Dog–Human Relationship",
            "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6912837/"
          }
        ]
      },
      "nocturnal": {
        "level": "medium",
        "evidence": [
          {
            "description": "オオカミは主に薄明薄暮性で、夜明けや夕暮れ時に最も活発ですが、獲物の状況や人間の活動に応じて夜間にも活動することがあります。",
            "title": "Wolf Socialization: A Study of Temperament in a Wild Social Species",
            "source": "https://academic.oup.com/icb/article-abstract/7/2/357/105717"
          }
        ]
      },
      "loyal": {
        "level": "high",
        "evidence": [
          {
            "description": "オオカミは繁殖ペアとその子供たちからなる群れ内で強い絆を築き、様々な活動において協力します。",
            "title": "Alpha Status, Dominance, and Division of Labor in Wolf Packs",
            "source": "https://digitalcommons.unl.edu/usgsnpwrc/353"
          }
        ]
      },
      "vocal": {
        "level": "high",
        "evidence": [
          {
            "description": "オオカミは遠吠え、唸り声、吠え声など様々な鳴き声を使い、遠く離れた仲間とコミュニケーションを取ります。",
            "title": "Wolf Socialization: A Study of Temperament in a Wild Social Species",
            "source": "https://academic.oup.com/icb/article-abstract/7/2/357/105717"
          }
        ]
      },
      "curious": {
        "level": "medium",
        "evidence": [
          {
            "description": "オオカミは、新しい物体や環境に対して好奇心を示しますが、その反応は個体の性格や過去の経験によって異なります。",
            "title": "A First Exploratory Comparison of the Behaviour of Wolves (Canis lupus) and Admixed Wolves: Potential Implications for Conservation",
            "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10907477/"
          }
        ]
      },
      "hierarchical": {
        "level": "high",
        "evidence": [
          {
            "description": "オオカミの群れには明確な階層構造があり、通常は繁殖ペアがリーダーとして、各メンバーに役割と責任が割り当てられています。",
            "title": "Alpha Status, Dominance, and Division of Labor in Wolf Packs",
            "source": "https://digitalcommons.unl.edu/usgsnpwrc/353"
          }
        ]
      },
      "independent": {
        "level": "low",
        "evidence": [
          {
            "description": "オオカミは狩り、子育て、縄張りの防衛において群れの協力に大きく依存しており、独立性は低いです。",
            "title": "Back to the Future: A Glance Over Wolf Social Behavior to Understand Dog–Human Relationship",
            "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6912837/"
          }
        ]
      },
      "protective": {
        "level": "high",
        "evidence": [
          {
            "description": "オオカミは群れのメンバーや縄張りを守るため、脅威に対して防御的な行動をとります。",
            "title": "Alpha Status, Dominance, and Division of Labor in Wolf Packs",
            "source": "https://digitalcommons.unl.edu/usgsnpwrc/353"
          }
        ]
      },
      "energetic": {
        "level": "high",
        "evidence": [
          {
            "description": "オオカミは非常に活発な動物で、獲物を求めて長距離を移動したり、自縄張りを巡回したりすることができます。",
            "title": "Wolf Responses to Experimental Human Approaches Using High-Resolution GPS Data",
            "source": "https://www.frontiersin.org/articles/10.3389/fevo.2022.792916/full"
          }
        ]
      }
    }
  },
  {
    "id": "04",
    "name": "Elephant",
    "japaneseName": "ゾウ",
    "description": "ゾウは高度な知性と社交性を持ち、複雑な行動と強固な社会構造で知られています。",
    "imageUrl": "/images/elephant.jpg",
    "traits": {
      "social": {
        "level": "high",
        "evidence": [
          {
            "description": "野生のアフリカゾウの雌は、リーダーシップや社会的統合の性格特性を示し、高い社交性を表しています。",
            "title": "Wild female African elephants (Loxodonta africana) exhibit personality traits of leadership and social integration",
            "source": "https://www.sciencedirect.com/science/article/pii/S0191886924003118"
          },
          {
            "description": "アジアゾウは、ポジティブな社会的交流を反映する『社交性』という性格因子を持つことが確認されています。",
            "title": "Evaluating the personality structure of semi-captive Asian elephants living in their natural habitat",
            "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5830789/"
          }
        ]
      },
      "territorial": {
        "level": "low",
        "evidence": [
          {
            "description": "ゾウは厳密な縄張り意識はなく、生活圏を持ち、移動は特定の領域を守るというよりも、資源の利用状況によって左右されます。",
            "title": "Remembering Elephant Behavior, Cognition and Ecology in Human-Elephant Conflict: Implications for Conservation and Management",
            "source": "https://www.frontiersin.org/articles/10.3389/fevo.2018.00122/full"
          }
        ]
      },
      "aggressive": {
        "level": "medium",
        "evidence": [
          {
            "description": "雄ゾウは雌に比べて攻撃性が著しく高く、特に雄同士では中程度の攻撃性が見られます。",
            "title": "Males have more aggressive and less sociable personalities than females in semi-captive Asian elephants",
            "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6390182/"
          }
        ]
      },
      "playful": {
        "level": "high",
        "evidence": [
          {
            "description": "遊び好きな行動は、アジアゾウに見られる社交性の一要素で、遊びの交流に積極的であることを示しています。",
            "title": "Evaluating the personality structure of semi-captive Asian elephants living in their natural habitat",
            "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5830789/"
          }
        ]
      },
      "nocturnal": {
        "level": "low",
        "evidence": [
          {
            "description": "ゾウは主に昼行性で、日中に活発に活動する傾向があります。",
            "title": "Diurnal and nocturnal activity budgets of zoo elephants in an outdoor facility",
            "source": "https://scholars.unh.edu/cgi/viewcontent.cgi?article=1006&context=inquiry_2017"
          }
        ]
      },
      "loyal": {
        "level": "high",
        "evidence": [
          {
            "description": "ゾウは社会集団内で強く長期的な絆を築くため、高い忠誠心が見られます。",
            "title": "Wild female African elephants (Loxodonta africana) exhibit personality traits of leadership and social integration",
            "source": "https://www.sciencedirect.com/science/article/pii/S0191886924003118"
          }
        ]
      },
      "vocal": {
        "level": "high",
        "evidence": [
          {
            "description": "ゾウはコミュニケーションのために様々な鳴き声を用い、超低周波の呼び声は長距離に伝わります。",
            "title": "Elephants are capable of vocal learning",
            "source": "https://en.wikipedia.org/wiki/Joyce_Poole"
          }
        ]
      },
      "curious": {
        "level": "high",
        "evidence": [
          {
            "description": "ゾウは新しい物体に興味を示し、積極的に関わる様子が観察されています。",
            "title": "Elephants solve problems with personality",
            "source": "https://phys.org/news/2021-06-elephants-problems-personality.html"
          }
        ]
      },
      "hierarchical": {
        "level": "high",
        "evidence": [
          {
            "description": "ゾウは社会構造内で優位性の階層を示し、階層的な性質が見られます。",
            "title": "Male African elephants develop distinct personality traits as they age, study finds",
            "source": "https://news.mongabay.com/2025/02/male-african-elephants-develop-distinct-personality-traits-as-they-age-study-finds/"
          }
        ]
      },
      "independent": {
        "level": "medium",
        "evidence": [
          {
            "description": "雄ゾウは単独または緩やかな雄のグループで生活することが多く、ある程度の独立性が見られます。",
            "title": "Evaluating the personality structure of semi-captive Asian elephants living in their natural habitat",
            "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5830789/"
          }
        ]
      },
      "protective": {
        "level": "high",
        "evidence": [
          {
            "description": "ゾウは特に母系社会において、社会集団に対する保護行動を示します。",
            "title": "Wild female African elephants (Loxodonta africana) exhibit personality traits of leadership and social integration",
            "source": "https://www.sciencedirect.com/science/article/pii/S0191886924003118"
          }
        ]
      },
      "energetic": {
        "level": "medium",
        "evidence": [
          {
            "description": "ゾウの活動レベルは個体差があり、活発な個体もいればそうでない個体も存在します。",
            "title": "Personality in Asian elephants (Elephas maximus)",
            "source": "https://chesterrep.openrepository.com/bitstream/handle/10034/628970/1-s2.0-S0191886924003118-main.pdf?isAllowed=y&sequence=5"
          }
        ]
      }
    }
  },
  {
    "id": "05",
    "name": "Dolphin",
    "japaneseName": "イルカ",
    "description": "イルカは高度な知性を持つ海洋哺乳類で、複雑な社会構造、遊び好きな行動、そして高度なコミュニケーション能力で知られています。",
    "imageUrl": "/images/dolphin.jpg",
    "traits": {
      "social": {
        "level": "high",
        "evidence": [
          {
            "description": "イルカはポッドと呼ばれる活発な社会集団で生活し、複雑な社会的行動を示し、互いに強い絆を築きます。",
            "title": "Understanding Dolphin Behavior: Insights into the Lives of Key West Dolphins",
            "source": "https://honesteco.org/blog/dolphin-behavior/"
          },
          {
            "description": "イルカは絶えずコミュニケーションを取り、名前で呼び合い、協力して魚を捕まえたり互いを守ったりします。",
            "title": "Did you know that dolphins have unique personalities?",
            "source": "https://uk.whales.org/2022/12/27/did-you-know-that-dolphins-have-unique-personalities/"
          }
        ]
      },
      "territorial": {
        "level": "low",
        "evidence": [
          {
            "description": "イルカはグループの構成が頻繁に変わるフュージョン・フィジョン型の社会で生活しており、縄張り意識は低いです。",
            "title": "Bottlenose dolphin",
            "source": "https://en.wikipedia.org/wiki/Bottlenose_dolphin"
          }
        ]
      },
      "aggressive": {
        "level": "medium",
        "evidence": [
          {
            "description": "雄イルカは地位や雌へのアクセスを巡って競い合い、時には頭突きなどの攻撃的な行動を示すことがあります。",
            "title": "Bottlenose dolphin",
            "source": "https://en.wikipedia.org/wiki/Bottlenose_dolphin"
          }
        ]
      },
      "playful": {
        "level": "high",
        "evidence": [
          {
            "description": "イルカは水面から飛び出す、互いに追いかけっこをする、浮かぶ物体と遊ぶなど、遊び好きな行動で知られています。",
            "title": "Understanding Dolphin Behavior: Insights into the Lives of Key West Dolphins",
            "source": "https://honesteco.org/blog/dolphin-behavior/"
          }
        ]
      },
      "nocturnal": {
        "level": "medium",
        "evidence": [
          {
            "description": "スピナードルフィンなど、一部のイルカ種は夜行性で、小魚やイカなどの獲物を夜間に採餌します。",
            "title": "Spinner dolphin",
            "source": "https://en.wikipedia.org/wiki/Spinner_dolphin"
          },
          {
            "description": "バンドウイルカは夜間にも活発な動きを見せ、行動域を利用する様子が観察されています。",
            "title": "Nocturnal movements and habitat use of bottlenose dolphins within a convoluted estuarine system",
            "source": "https://animalbiotelemetry.biomedcentral.com/articles/10.1186/s40317-020-00200-4"
          }
        ]
      },
      "loyal": {
        "level": "high",
        "evidence": [
          {
            "description": "イルカはポッド内で強い絆を築き、協力して魚を捕らえたり互いを守ったりすることで忠誠心を示します。",
            "title": "Did you know that dolphins have unique personalities?",
            "source": "https://uk.whales.org/2022/12/27/did-you-know-that-dolphins-have-unique-personalities/"
          }
        ]
      },
      "vocal": {
        "level": "high",
        "evidence": [
          {
            "description": "イルカはバーストパルス音やホイッスル、ボディランゲージなどを用いて、活動の調整や社会的な絆の維持を行います。",
            "title": "Bottlenose dolphin",
            "source": "https://en.wikipedia.org/wiki/Bottlenose_dolphin"
          }
        ]
      },
      "curious": {
        "level": "high",
        "evidence": [
          {
            "description": "イルカは人間や霊長類に似た好奇心や社交性を示す特性を持っています。",
            "title": "Dolphins, humans and primates have similar personality traits",
            "source": "https://www.hull.ac.uk/work-with-us/more/media-centre/news/2021/psychologist-discovers-dolphins-humans-and-primates-have-similar-personality-traits"
          }
        ]
      },
      "hierarchical": {
        "level": "low",
        "evidence": [
          {
            "description": "イルカは霊長類とは異なり、社会構造内で強い支配階層を示しません。",
            "title": "Dolphins' personality traits are surprisingly similar to our own",
            "source": "https://www.bps.org.uk/research-digest/dolphins-personality-traits-are-surprisingly-similar-our-own"
          }
        ]
      },
      "independent": {
        "level": "low",
        "evidence": [
          {
            "description": "イルカは狩りや防衛の際に群れの協力に頼る非常に社交的な動物です。",
            "title": "Understanding Dolphin Behavior: Insights into the Lives of Key West Dolphins",
            "source": "https://honesteco.org/blog/dolphin-behavior/"
          }
        ]
      },
      "protective": {
        "level": "high",
        "evidence": [
          {
            "description": "イルカは、座礁したクジラを開けた海へ導くなど、他種を保護する行動が観察されています。",
            "title": "Bottlenose dolphin",
            "source": "https://en.wikipedia.org/wiki/Bottlenose_dolphin"
          }
        ]
      },
      "energetic": {
        "level": "high",
        "evidence": [
          {
            "description": "イルカは活発で遊び好きな性格があり、水面から飛び出す様子や社交的な活動がよく見られます。",
            "title": "Understanding Dolphin Behavior: Insights into the Lives of Key West Dolphins",
            "source": "https://honesteco.org/blog/dolphin-behavior/"
          }
        ]
      }
    }
  },
  {
    "id": "06",
    "name": "Tiger",
    "japaneseName": "トラ",
    "description": "トラ（Panthera tigris）は、ネコ科の中で最大の種であり、Panthera属に属します。赤橙色の毛皮に暗い縦縞模様と明るい腹部が特徴で、シカやイノシシなどの有蹄類を主な獲物とする最上位捕食者です。トラは、シベリアの森林から熱帯のマングローブ湿地に至るアジア各地に生息しています。",
    "imageUrl": "/images/tiger.jpg",
    "traits": {
      "social": {
        "level": "low",
        "evidence": [
          {
            "description": "トラは主に単独で生活し、各自が自分の縄張りを維持し守っています。社会的な交流は限られており、主に交尾時や母と子の間に見られます。",
            "title": "Majestic tigers: personality structure in the great Amur cat",
            "source": "https://royalsocietypublishing.org/doi/10.1098/rsos.220957"
          }
        ]
      },
      "territorial": {
        "level": "high",
        "evidence": [
          {
            "description": "トラは広大な縄張りを確保し守ることで知られており、雄の縄張りはしばしば複数の雌の縄張りと重なります。彼らは匂いによるマーキングや鳴き声を使って縄張りの境界を示します。",
            "title": "Majestic tigers: personality structure in the great Amur cat",
            "source": "https://royalsocietypublishing.org/doi/10.1098/rsos.220957"
          }
        ]
      },
      "aggressive": {
        "level": "medium",
        "evidence": [
          {
            "description": "トラは縄張りの防衛や交尾争いの際に攻撃性を示すことがありますが、個体差が存在します。あるトラは特定の性格特性に関連して、より高い攻撃性を示すこともあります。",
            "title": "Using Keeper Questionnaires to Capture Zoo-Housed Tiger (Panthera tigris) Personality: Implications for Management",
            "source": "https://www.mdpi.com/2673-5636/2/4/47"
          }
        ]
      },
      "playful": {
        "level": "medium",
        "evidence": [
          {
            "description": "子トラは狩りの技術や社会的行動を育むために重要な遊びに従事することが多く、成体のトラも特に環境が豊かであれば遊びの行動を示すことがあります。",
            "title": "Personality and Sociality in Captive Tigers (Panthera tigris)",
            "source": "https://journalarrb.com/index.php/ARRB/article/view/929"
          }
        ]
      },
      "nocturnal": {
        "level": "medium",
        "evidence": [
          {
            "description": "トラは主に薄明薄暮性で、夜明けや夕暮れ時に最も活発ですが、獲物の状況や人間の影響によっては夜行性や昼行性に変わることもあります。",
            "title": "Majestic tigers: personality structure in the great Amur cat",
            "source": "https://royalsocietypublishing.org/doi/10.1098/rsos.220957"
          }
        ]
      },
      "loyal": {
        "level": "low",
        "evidence": [
          {
            "description": "トラは単独生活であるため「忠誠心」という概念の評価は難しいです。母親は子供に対して注意深いですが、これは忠誠心というよりも母性本能と言えます。",
            "title": "Personality and Sociality in Captive Tigers (Panthera tigris)",
            "source": "https://journalarrb.com/index.php/ARRB/article/view/929"
          }
        ]
      },
      "vocal": {
        "level": "medium",
        "evidence": [
          {
            "description": "トラは咆哮、唸り声、チャフ、呻き声など多様な鳴き声を持ち、交尾の呼びかけ、縄張りの宣言、母と子のコミュニケーションなど、様々な場面で使われます。",
            "title": "Using Keeper Questionnaires to Capture Zoo-Housed Tiger (Panthera tigris) Personality: Implications for Management",
            "source": "https://www.mdpi.com/2673-5636/2/4/47"
          }
        ]
      },
      "curious": {
        "level": "high",
        "evidence": [
          {
            "description": "トラは環境の変化や新しい刺激に対して著しい好奇心を示し、これは狩りや縄張りの監視にとって重要です。",
            "title": "Majestic tigers: personality structure in the great Amur cat",
            "source": "https://royalsocietypublishing.org/doi/10.1098/rsos.220957"
          }
        ]
      },
      "hierarchical": {
        "level": "low",
        "evidence": [
          {
            "description": "トラは単独生活のため、社会的な階層を築くことはなく、交流も最小限に抑えられるため、階層構造の必要性が低いです。",
            "title": "Majestic tigers: personality structure in the great Amur cat",
            "source": "https://royalsocietypublishing.org/doi/10.1098/rsos.220957"
          }
        ]
      },
      "independent": {
        "level": "high",
        "evidence": [
          {
            "description": "トラは単独で非常に自立しており、狩りや生存のために自らの能力に頼り、他個体への依存はほとんどありません。",
            "title": "Majestic tigers: personality structure in the great Amur cat",
            "source": "https://royalsocietypublishing.org/doi/10.1098/rsos.220957"
          }
        ]
      },
      "protective": {
        "level": "medium",
        "evidence": [
          {
            "description": "母トラは子供に対して非常に保護的で、独立するまで潜在的な脅威に対して攻撃的に守ります。",
            "title": "Personality and Sociality in Captive Tigers (Panthera tigris)",
            "source": "https://journalarrb.com/index.php/ARRB/article/view/929"
          }
        ]
      },
      "energetic": {
        "level": "medium",
        "evidence": [
          {
            "description": "トラは狩りや縄張りのパトロールの際に一時的なエネルギーの爆発を示しますが、エネルギーを節約するために長時間休むことも多いです。",
            "title": "Using Keeper Questionnaires to Capture Zoo-Housed Tiger (Panthera tigris) Personality: Implications for Management",
            "source": "https://www.mdpi.com/2673-5636/2/4/47"
          }
        ]
      }
    }
  },
  {
    "id": "07",
    "name": "Eagle",
    "japaneseName": "ワシ",
    "description": "ワシは鋭い視力、強力な飛行力、そして重要な文化的象徴性で知られる大型の猛禽類です。世界各地に生息し、水辺近くの開けた風景を好むことが多いです。",
    "imageUrl": "/images/eagle.jpg",
    "traits": {
      "social": {
        "level": "low",
        "evidence": [
          {
            "description": "ワシは繁殖期を除いて基本的に単独生活を送り、群れで水浴びをしたり、寒い時には共同で止まり木に止まったりと、限定的な社会行動を示すことがあります。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "territorial": {
        "level": "high",
        "evidence": [
          {
            "description": "縄張りを守るために、成体のワシは侵入者に向けて急降下を行い、その後追いかけるといったディスプレイを行います。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "aggressive": {
        "level": "medium",
        "evidence": [
          {
            "description": "直接の接触はあまり見られませんが、特に卵を産む前には侵入者に向けて急降下するなどの攻撃的な行動を示します。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "playful": {
        "level": "medium",
        "evidence": [
          {
            "description": "ワシは棒を運んだり、落としたり、再び掴んだり、石で遊んだり、若い哺乳類を追いかけたりする遊びの行動が観察されています。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "nocturnal": {
        "level": "low",
        "evidence": [
          {
            "description": "ワシは昼行性で、日中に活動し、夜は休む性質があります。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "loyal": {
        "level": "high",
        "evidence": [
          {
            "description": "ワシは忠誠心が強いことで知られ、生涯にわたって一夫一婦のペアを形成することが多いです。",
            "title": "5 DEFINING EAGLE LEADERS TRAITS - CORPUSVEC",
            "source": "https://www.linkedin.com/pulse/5-defining-eagle-leadership-traits-corpusvec-corpusvec-fellow-"
          }
        ]
      },
      "vocal": {
        "level": "medium",
        "evidence": [
          {
            "description": "ワシは主にパートナーとのコミュニケーションや縄張りのシグナルとして鳴き声を用います。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "curious": {
        "level": "medium",
        "evidence": [
          {
            "description": "ワシは狩りの際や新しい領域を探検する時に好奇心を示します。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "hierarchical": {
        "level": "medium",
        "evidence": [
          {
            "description": "ワシは基本的には単独ですが、共同で止まる場合など、年齢や優位性に基づく階層が見られることもあります。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "independent": {
        "level": "high",
        "evidence": [
          {
            "description": "ワシは非常に自立しており、繁殖期を除いては単独で狩りを行い、独自の縄張りを維持します。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      },
      "protective": {
        "level": "high",
        "evidence": [
          {
            "description": "ワシは特に巣やヒナに対して強い保護行動を示し、潜在的な脅威に対して激しく守ります。",
            "title": "Like an eagle carries its young",
            "source": "https://www.researchgate.net/publication/305369043_Like_an_eagle_carries_its_young"
          }
        ]
      },
      "energetic": {
        "level": "high",
        "evidence": [
          {
            "description": "ワシは力強い飛行力を持ち、広大な領域をカバーしながらダイナミックな狩猟技術を発揮するなど、高いエネルギーレベルを示します。",
            "title": "Golden Eagle (Aquila chrysaetos) Fact Sheet: Behavior & Ecology",
            "source": "https://ielc.libguides.com/sdzg/factsheets/goldeneagle/behavior"
          }
        ]
      }
    }
  },
  {
    "id": "08",
    "name": "Camel",
    "japaneseName": "ラクダ",
    "description": "ラクダは大型の偶蹄類で、特徴的なコブと乾燥地帯への驚くべき適応能力で知られています。何千年も前から家畜化され、砂漠地域での移動手段や、ミルク、肉、毛織物などの重要な資源として利用されてきました。",
    "imageUrl": "/images/camel.jpg",
    "traits": {
      "social": {
        "level": "high",
        "evidence": [
          {
            "description": "一峰ラクダは、通常20頭ほどのまとまりを形成し、支配的な雄が率いることが多いです。これらの群れは、移動時や環境の変化に応じて、より大きな集団を形成することがあります。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          },
          {
            "description": "野生のラクダは、水源を共同で利用するために群れを作るなど、社会的な行動を示します。",
            "title": "Grouping behavior of wild camel (Camelus ferus) referred from continuous camera trapping in the Kumtag Desert",
            "source": "https://www.biodiversity-science.net/EN/10.3724/SP.J.1003.2014.14180"
          }
        ]
      },
      "territorial": {
        "level": "medium",
        "evidence": [
          {
            "description": "雄ラクダは、特に交尾期には優位性を確立するための行動を示し、水源などの資源を守ることもあり、ある程度の縄張り意識を示します。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          }
        ]
      },
      "aggressive": {
        "level": "medium",
        "evidence": [
          {
            "description": "普段は攻撃的ではないものの、雄ラクダは交尾期には支配権を確立するために、レスリングや噛みつくといった攻撃的な行動をとることがあります。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          }
        ]
      },
      "playful": {
        "level": "low",
        "evidence": [
          {
            "description": "ラクダにおける遊び行動はほとんど確認されておらず、成人のラクダではそのような行動は稀か、見られないようです。",
            "title": "Behavioural Repertoire and Behavioural Needs of Camels",
            "source": "https://www.researchgate.net/publication/377558847_Behaviour_Behavioural_Repertoire_and_Behavioural_Needs_of_Camels"
          }
        ]
      },
      "nocturnal": {
        "level": "low",
        "evidence": [
          {
            "description": "ラクダは昼行性で、主に日中に活動します。日中は餌を食べたり歩き回ったりし、正午頃の最も暑い時間は休息し、夜は主に休む時間となります。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          },
          {
            "description": "飼育下の雄ラクダを対象とした研究では、餌を食べたり歩くなどの活発な行動は日中にピークを迎え、横たわるなどの非活発な行動は夜間にピークを迎えることが示されました。",
            "title": "Daily rhythms of behavioral and hormonal patterns in male dromedary camels housed in boxes",
            "source": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5374969/"
          }
        ]
      },
      "loyal": {
        "level": "medium",
        "evidence": [
          {
            "description": "ベドウィンの共同体では、ラクダは社会的地位やアイデンティティの一部とされ、人間とラクダの間に強い絆や相互依存関係が存在することが示唆されています。",
            "title": "Camels in the Bedouin Community of Oman: Beyond the Human-Animal Binary",
            "source": "https://research.vu.nl/files/299123324/Camels_in_the_Bedouin_Community_of_Oman_Beyond_the_Human_Animal_Binary.pdf"
          }
        ]
      },
      "vocal": {
        "level": "medium",
        "evidence": [
          {
            "description": "交尾期の雄ラクダは、ソフトパレートを突き出しながら、ゴロゴロとした音などの鳴き声を出すことがあります。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          }
        ]
      },
      "curious": {
        "level": "medium",
        "evidence": [
          {
            "description": "ラクダは、新しい環境や物体に出会うと探検的な行動を示し、好奇心を持っていることが分かります。",
            "title": "Behavioural Repertoire and Behavioural Needs of Camels",
            "source": "https://www.researchgate.net/publication/377558847_Behaviour_Behavioural_Repertoire_and_Behavioural_Needs_of_Camels"
          }
        ]
      },
      "hierarchical": {
        "level": "high",
        "evidence": [
          {
            "description": "ラクダの群れは通常、支配的な雄が率いており、明確な社会的階層が存在します。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          }
        ]
      },
      "independent": {
        "level": "medium",
        "evidence": [
          {
            "description": "一部の雄ラクダは独りで歩き回ったり、バチェラーグループを形成したりするため、特に交尾期以外ではある程度の独立性が示唆されます。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          }
        ]
      },
      "protective": {
        "level": "medium",
        "evidence": [
          {
            "description": "支配的な雄は、バチェラーの雄と女性が接触するのを防ぐため、自らの体を介してバチェラーの雄を追い払うことがあります。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          }
        ]
      },
      "energetic": {
        "level": "medium",
        "evidence": [
          {
            "description": "ラクダは1日に8〜12時間草を食べ、同じくらいの時間を反芻に費やすため、一日を通して持続的な活動レベルを示します。",
            "title": "Dromedary",
            "source": "https://en.wikipedia.org/wiki/Dromedary"
          }
        ]
      }
    }
  }
];
