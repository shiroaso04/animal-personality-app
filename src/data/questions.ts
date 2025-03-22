import { Question } from '../types';

/**
 * 行動心理学に基づいた動物性格診断のための拡張質問リスト
 * 
 * このリストは、animals.ts に定義された動物たちの行動特性（
 * social, territorial, aggressive, playful, nocturnal, loyal, vocal, curious,
 * hierarchical, independent, protective, energetic）に基づいています。
 * 
 * 質問は複数の特性に影響します。各特性に対してmatchScoreとnarrowingScoreを
 * 個別に設定することで、より正確なマッチングが可能になっています。
 * correctnessScoreは質問の信頼性を示します。
 */
export const questions: Question[] = [
  // Social behavior
  {
    id: 'q1',
    text: '他の人と一緒にいるとエネルギーがわいてくると感じますか？',
    relatedTraits: [
      { traitId: 'social', matchScore: 9, narrowingScore: 8 },
      { traitId: 'energetic', matchScore: 6, narrowingScore: 4 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q2',
    text: '一人よりもグループで活動することを好みますか？',
    relatedTraits: [
      { traitId: 'social', matchScore: 8, narrowingScore: 7 },
      { traitId: 'independent', matchScore: -7, narrowingScore: 6 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q3',
    text: 'グループ内で意見が対立した場合、対話と協調を通じて解決しようとしますか？',
    relatedTraits: [
      { traitId: 'social', matchScore: 7, narrowingScore: 7 },
      { traitId: 'aggressive', matchScore: -6, narrowingScore: 5 },
      { traitId: 'hierarchical', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 7
  },

  // Territorial behavior
  {
    id: 'q4',
    text: '自分の持ち物やプライベート空間を大切にする方ですか？',
    relatedTraits: [
      { traitId: 'territorial', matchScore: 9, narrowingScore: 8 },
      { traitId: 'protective', matchScore: 7, narrowingScore: 6 },
      { traitId: 'aggressive', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q5',
    text: '自分の空間に他人が許可なく入ってくると不快に感じますか？',
    relatedTraits: [
      { traitId: 'territorial', matchScore: 9, narrowingScore: 7 },
      { traitId: 'independent', matchScore: 5, narrowingScore: 4 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q6',
    text: '自分の所有物や空間を整理整頓することに時間をかけますか？',
    relatedTraits: [
      { traitId: 'territorial', matchScore: 6, narrowingScore: 5 },
      { traitId: 'hierarchical', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 6
  },

  // Aggressive behavior
  {
    id: 'q7',
    text: '脅かされたと感じたとき、ためらわずに反撃する方ですか？',
    relatedTraits: [
      { traitId: 'aggressive', matchScore: 8, narrowingScore: 7 },
      { traitId: 'protective', matchScore: 6, narrowingScore: 5 },
      { traitId: 'territorial', matchScore: 5, narrowingScore: 4 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q8',
    text: '議論が白熱した時、声を大きくしたり強い言葉を使うことがありますか？',
    relatedTraits: [
      { traitId: 'aggressive', matchScore: 7, narrowingScore: 7 },
      { traitId: 'vocal', matchScore: 8, narrowingScore: 6 },
      { traitId: 'social', matchScore: -4, narrowingScore: 3 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q9',
    text: '自分の意見や立場を守るためなら対立も厭わない方ですか？',
    relatedTraits: [
      { traitId: 'aggressive', matchScore: 6, narrowingScore: 6 },
      { traitId: 'independent', matchScore: 7, narrowingScore: 5 },
      { traitId: 'hierarchical', matchScore: 5, narrowingScore: 4 }
    ],
    correctnessScore: 7
  },

  // Playful behavior
  {
    id: 'q10',
    text: '新しいゲームやアクティビティに挑戦することを楽しみますか？',
    relatedTraits: [
      { traitId: 'playful', matchScore: 8, narrowingScore: 7 },
      { traitId: 'curious', matchScore: 7, narrowingScore: 6 },
      { traitId: 'energetic', matchScore: 6, narrowingScore: 5 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q11',
    text: '友人とのジョークや冗談を言い合うことが好きですか？',
    relatedTraits: [
      { traitId: 'playful', matchScore: 9, narrowingScore: 8 },
      { traitId: 'social', matchScore: 6, narrowingScore: 5 },
      { traitId: 'vocal', matchScore: 5, narrowingScore: 4 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q12',
    text: '日常の中で楽しさやユーモアを見つけることが得意ですか？',
    relatedTraits: [
      { traitId: 'playful', matchScore: 8, narrowingScore: 7 },
      { traitId: 'curious', matchScore: 5, narrowingScore: 4 },
      { traitId: 'energetic', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 7
  },

  // Nocturnal behavior
  {
    id: 'q13',
    text: '夜に活動的になり、夜更かしする傾向がありますか？',
    relatedTraits: [
      { traitId: 'nocturnal', matchScore: 9, narrowingScore: 8 },
      { traitId: 'independent', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 9
  },
  {
    id: 'q14',
    text: '夜の静けさの中で集中して作業するのが好きですか？',
    relatedTraits: [
      { traitId: 'nocturnal', matchScore: 8, narrowingScore: 7 },
      { traitId: 'independent', matchScore: 5, narrowingScore: 4 },
      { traitId: 'social', matchScore: -4, narrowingScore: 3 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q15',
    text: '朝よりも夜に精力的に感じることが多いですか？',
    relatedTraits: [
      { traitId: 'nocturnal', matchScore: 9, narrowingScore: 8 },
      { traitId: 'energetic', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 8
  },

  // Loyal behavior
  {
    id: 'q16',
    text: '長期間にわたって同じ友人関係を維持することを大切にしますか？',
    relatedTraits: [
      { traitId: 'loyal', matchScore: 9, narrowingScore: 8 },
      { traitId: 'social', matchScore: 5, narrowingScore: 4 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q17',
    text: '信頼できる人のためなら自分を犠牲にすることもいとわないですか？',
    relatedTraits: [
      { traitId: 'loyal', matchScore: 9, narrowingScore: 8 },
      { traitId: 'protective', matchScore: 7, narrowingScore: 6 },
      { traitId: 'independent', matchScore: -4, narrowingScore: 3 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q18',
    text: '一度約束したことは最後まで守り通しますか？',
    relatedTraits: [
      { traitId: 'loyal', matchScore: 8, narrowingScore: 7 },
      { traitId: 'hierarchical', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 7
  },

  // Vocal behavior
  {
    id: 'q19',
    text: '考えていることや感じていることを声に出して表現することが多いですか？',
    relatedTraits: [
      { traitId: 'vocal', matchScore: 9, narrowingScore: 8 },
      { traitId: 'social', matchScore: 6, narrowingScore: 5 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q20',
    text: '感情が高ぶると、声のトーンや大きさが自然と変わりますか？',
    relatedTraits: [
      { traitId: 'vocal', matchScore: 8, narrowingScore: 7 },
      { traitId: 'aggressive', matchScore: 5, narrowingScore: 4 },
      { traitId: 'emotional', matchScore: 7, narrowingScore: 6 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q21',
    text: '静かな環境よりも、音楽や会話のある環境を好みますか？',
    relatedTraits: [
      { traitId: 'vocal', matchScore: 7, narrowingScore: 6 },
      { traitId: 'social', matchScore: 6, narrowingScore: 5 },
      { traitId: 'nocturnal', matchScore: -3, narrowingScore: 2 }
    ],
    correctnessScore: 7
  },

  // Curious behavior
  {
    id: 'q22',
    text: '新しい場所や環境を探索することに喜びを感じますか？',
    relatedTraits: [
      { traitId: 'curious', matchScore: 9, narrowingScore: 8 },
      { traitId: 'playful', matchScore: 6, narrowingScore: 5 },
      { traitId: 'energetic', matchScore: 5, narrowingScore: 4 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q23',
    text: '新しい情報や知識を得ることに積極的ですか？',
    relatedTraits: [
      { traitId: 'curious', matchScore: 8, narrowingScore: 7 },
      { traitId: 'independent', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q24',
    text: '物事の仕組みを理解したいという好奇心が強い方ですか？',
    relatedTraits: [
      { traitId: 'curious', matchScore: 9, narrowingScore: 8 },
      { traitId: 'intelligent', matchScore: 7, narrowingScore: 6 }
    ],
    correctnessScore: 8
  },

  // Hierarchical behavior
  {
    id: 'q25',
    text: 'グループ内でリーダーシップを取ることを好みますか？',
    relatedTraits: [
      { traitId: 'hierarchical', matchScore: 9, narrowingScore: 8 },
      { traitId: 'independent', matchScore: 5, narrowingScore: 4 },
      { traitId: 'social', matchScore: 6, narrowingScore: 5 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q26',
    text: '組織や集団内での役割や立場を常に意識する方ですか？',
    relatedTraits: [
      { traitId: 'hierarchical', matchScore: 8, narrowingScore: 7 },
      { traitId: 'social', matchScore: 5, narrowingScore: 4 },
      { traitId: 'territorial', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q27',
    text: '権威ある人の指示や助言を尊重する傾向がありますか？',
    relatedTraits: [
      { traitId: 'hierarchical', matchScore: 7, narrowingScore: 6 },
      { traitId: 'loyal', matchScore: 6, narrowingScore: 5 },
      { traitId: 'independent', matchScore: -5, narrowingScore: 4 }
    ],
    correctnessScore: 7
  },

  // Independent behavior
  {
    id: 'q28',
    text: '自分で決断し、行動することを好みますか？',
    relatedTraits: [
      { traitId: 'independent', matchScore: 9, narrowingScore: 8 },
      { traitId: 'hierarchical', matchScore: -4, narrowingScore: 3 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q29',
    text: '他人に頼らず自分で物事を成し遂げることを大切にしますか？',
    relatedTraits: [
      { traitId: 'independent', matchScore: 8, narrowingScore: 7 },
      { traitId: 'social', matchScore: -5, narrowingScore: 4 },
      { traitId: 'territorial', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q30',
    text: '自分の時間や空間を持つことが重要だと感じますか？',
    relatedTraits: [
      { traitId: 'independent', matchScore: 7, narrowingScore: 6 },
      { traitId: 'territorial', matchScore: 6, narrowingScore: 5 },
      { traitId: 'nocturnal', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 7
  },

  // Protective behavior
  {
    id: 'q31',
    text: '大切な人を守るためなら、自分が危険な目に遭うことも厭いませんか？',
    relatedTraits: [
      { traitId: 'protective', matchScore: 9, narrowingScore: 8 },
      { traitId: 'loyal', matchScore: 7, narrowingScore: 6 },
      { traitId: 'aggressive', matchScore: 5, narrowingScore: 4 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q32',
    text: '弱い立場にある人や動物を見ると助けたくなりますか？',
    relatedTraits: [
      { traitId: 'protective', matchScore: 8, narrowingScore: 7 },
      { traitId: 'loyal', matchScore: 5, narrowingScore: 4 },
      { traitId: 'social', matchScore: 4, narrowingScore: 3 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q33',
    text: '家族や友人の安全を常に気にかけている方ですか？',
    relatedTraits: [
      { traitId: 'protective', matchScore: 9, narrowingScore: 8 },
      { traitId: 'territorial', matchScore: 6, narrowingScore: 5 },
      { traitId: 'loyal', matchScore: 7, narrowingScore: 6 }
    ],
    correctnessScore: 8
  },

  // Energetic behavior
  {
    id: 'q34',
    text: '一日中活動し続けても、あまり疲れを感じない方ですか？',
    relatedTraits: [
      { traitId: 'energetic', matchScore: 9, narrowingScore: 8 },
      { traitId: 'playful', matchScore: 6, narrowingScore: 5 }
    ],
    correctnessScore: 8
  },
  {
    id: 'q35',
    text: '体を動かすアクティビティが好きですか？',
    relatedTraits: [
      { traitId: 'energetic', matchScore: 8, narrowingScore: 7 },
      { traitId: 'playful', matchScore: 7, narrowingScore: 6 },
      { traitId: 'nocturnal', matchScore: -3, narrowingScore: 2 }
    ],
    correctnessScore: 7
  },
  {
    id: 'q36',
    text: '新しいプロジェクトや挑戦に情熱を持って取り組む方ですか？',
    relatedTraits: [
      { traitId: 'energetic', matchScore: 7, narrowingScore: 6 },
      { traitId: 'curious', matchScore: 8, narrowingScore: 7 },
      { traitId: 'playful', matchScore: 5, narrowingScore: 4 }
    ],
    correctnessScore: 8
  }
];
