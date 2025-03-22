import { Question } from '../types';

/**
 * 行動心理学に基づいた動物性格診断のための拡張質問リスト
 * 
 * このリストは、animals.ts に定義された動物たちの行動特性（
 * social, territorial, aggressive, playful, nocturnal, loyal, vocal, curious,
 * hierarchical, independent, protective, energetic）に基づいています。
 * 各特性について、グループ内での交流、個人の反応、状況適応などを評価するため
 * に3問ずつ、計36問の質問を設定しています。
 */
export const questions: Question[] = [
  // Social behavior
  {
    id: 'q1',
    text: 'あなたは他の人々と一緒にいる時にエネルギーを得ると感じますか？',
    relatedTraitId: 'social',
    narrowingScore: 8,
    correctnessScore: 7
  },
  {
    id: 'q2',
    text: '一人よりもグループで活動することを好みますか？',
    relatedTraitId: 'social',
    matchScore: 7
  },
  {
    id: 'q3',
    text: 'グループ内で意見が対立した場合、対話と協調を重視して調整しようとしますか？',
    relatedTraitId: 'social',
    narrowingScore: 7
  },

  // Territorial behavior
  {
    id: 'q4',
    text: '自分の個人的な空間や所有物に対して強い保護意識がありますか？',
    relatedTraitId: 'territorial',
    correctnessScore: 8
  },
  {
    id: 'q5',
    text: '自分のルーティンや習慣が他者によって妨げられると不快に感じますか？',
    relatedTraitId: 'territorial',
    narrowingScore: 7
  },
  {
    id: 'q6',
    text: '他人があなたのプライバシーに無遠慮に踏み込むと、強い抵抗感を覚えますか？',
    relatedTraitId: 'territorial',
    correctnessScore: 7
  },

  // Aggressive behavior
  {
    id: 'q7',
    text: '競争的な状況に直面した際、攻撃的な反応を示すことがありますか？',
    relatedTraitId: 'aggressive',
    matchScore: 8
  },
  {
    id: 'q8',
    text: '不公平な扱いを受けたと感じたとき、積極的に自己主張しますか？',
    relatedTraitId: 'aggressive',
    narrowingScore: 6
  },
  {
    id: 'q9',
    text: '挑戦を前にして、躊躇せずに自分の意見を通す自信がありますか？',
    relatedTraitId: 'aggressive',
    correctnessScore: 7
  },

  // Playful behavior
  {
    id: 'q10',
    text: '日常生活で遊び心を持って行動することが多いですか？',
    relatedTraitId: 'playful',
    correctnessScore: 7
  },
  {
    id: 'q11',
    text: '新しいことに挑戦する際、楽しみながら実験的に取り組むことを好みますか？',
    relatedTraitId: 'playful',
    matchScore: 6
  },
  {
    id: 'q12',
    text: '困難な状況でもユーモアを忘れず、前向きな態度を維持できますか？',
    relatedTraitId: 'playful',
    narrowingScore: 7
  },

  // Nocturnal behavior
  {
    id: 'q13',
    text: '夜間に活動的になり、夜遅くまで起きていることが自然だと感じますか？',
    relatedTraitId: 'nocturnal',
    narrowingScore: 8
  },
  {
    id: 'q14',
    text: '朝型よりも夜型のライフスタイルを好みますか？',
    relatedTraitId: 'nocturnal',
    correctnessScore: 7
  },
  {
    id: 'q15',
    text: '静かな夜の時間を、自分自身の充電や内省のために活用しますか？',
    relatedTraitId: 'nocturnal',
    matchScore: 7
  },

  // Loyal behavior
  {
    id: 'q16',
    text: '一度信頼関係を築いた相手とは、長期的に関係を維持しようとしますか？',
    relatedTraitId: 'loyal',
    matchScore: 9
  },
  {
    id: 'q17',
    text: '親しい人のために自分の利益を犠牲にすることをいとわないと感じますか？',
    relatedTraitId: 'loyal',
    correctnessScore: 8
  },
  {
    id: 'q18',
    text: '困難な時に、仲間や家族に対して献身的な支援を提供しますか？',
    relatedTraitId: 'loyal',
    narrowingScore: 8
  },

  // Vocal behavior
  {
    id: 'q19',
    text: '自分の感情や意見を積極的に表現することが多いですか？',
    relatedTraitId: 'vocal',
    narrowingScore: 7
  },
  {
    id: 'q20',
    text: '会話で自分の存在感を示すことに自信がありますか？',
    relatedTraitId: 'vocal',
    matchScore: 6
  },
  {
    id: 'q21',
    text: '困難な状況でも、はっきりと自分の意見を主張できますか？',
    relatedTraitId: 'vocal',
    correctnessScore: 7
  },

  // Curious behavior
  {
    id: 'q22',
    text: '新しい環境や状況に対して強い好奇心を持っていますか？',
    relatedTraitId: 'curious',
    correctnessScore: 8
  },
  {
    id: 'q23',
    text: '未知の事柄について学ぶことに喜びを感じますか？',
    relatedTraitId: 'curious',
    matchScore: 7
  },
  {
    id: 'q24',
    text: '新たな経験や知識を得るために、積極的に情報を収集しますか？',
    relatedTraitId: 'curious',
    narrowingScore: 7
  },

  // Hierarchical behavior
  {
    id: 'q25',
    text: 'グループ内での役割や地位が明確であることを重要視しますか？',
    relatedTraitId: 'hierarchical',
    narrowingScore: 8
  },
  {
    id: 'q26',
    text: 'リーダーシップをとることに自然と惹かれますか？',
    relatedTraitId: 'hierarchical',
    matchScore: 7
  },
  {
    id: 'q27',
    text: '集団の中で、秩序やルールを尊重し、調和を保つことに努めますか？',
    relatedTraitId: 'hierarchical',
    correctnessScore: 7
  },

  // Independent behavior
  {
    id: 'q28',
    text: '他人の助けを借りずに自分で問題を解決することを好みますか？',
    relatedTraitId: 'independent',
    correctnessScore: 9
  },
  {
    id: 'q29',
    text: '自分の判断に自信があり、他者の意見に左右されにくいですか？',
    relatedTraitId: 'independent',
    narrowingScore: 7
  },
  {
    id: 'q30',
    text: '新しい挑戦に対して、単独でリスクを取って進む勇気がありますか？',
    relatedTraitId: 'independent',
    matchScore: 8
  },

  // Protective behavior
  {
    id: 'q31',
    text: '親しい人や大切なものを守るために、リスクを取ることをいとわないですか？',
    relatedTraitId: 'protective',
    matchScore: 8
  },
  {
    id: 'q32',
    text: '周囲に対して守備的な行動を示すことが多いですか？',
    relatedTraitId: 'protective',
    correctnessScore: 7
  },
  {
    id: 'q33',
    text: '自分や仲間の安全を確保するために、積極的に問題を察知し対応しますか？',
    relatedTraitId: 'protective',
    narrowingScore: 7
  },

  // Energetic behavior
  {
    id: 'q34',
    text: '長時間高いエネルギーを保つことができますか？',
    relatedTraitId: 'energetic',
    narrowingScore: 8
  },
  {
    id: 'q35',
    text: '身体活動や運動に積極的に取り組むことを好みますか？',
    relatedTraitId: 'energetic',
    matchScore: 7
  },
  {
    id: 'q36',
    text: '多様なタスクに迅速に取り組むエネルギーと集中力を持っていますか？',
    relatedTraitId: 'energetic',
    correctnessScore: 8
  }
];
