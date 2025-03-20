import { Question } from '../types';

/**
 * 行動心理学に基づいた動物性格診断のための質問リスト
 * 
 * このリストは以下の心理学的原則に基づいています：
 * - 行動特性の多次元評価
 * - 状況特定的な反応パターン
 * - 感情・認知・行動の統合的評価
 * - 社会的文脈における自己認識
 */
export const questions: Question[] = [
  // 社会性に関する質問 (Social behavior)
  {
    id: 'q1',
    text: 'あなたは他の人々と一緒にいる時にエネルギーを得ると感じますか？',
    relatedTraitId: 'social',
    narrowingScore: 8,
    correctnessScore: 7
  },
  {
    id: 'q2',
    text: '一人で過ごす時間よりも、グループでの活動を選ぶことが多いですか？',
    relatedTraitId: 'social',
    matchScore: 7
  },
  {
    id: 'q3',
    text: '新しい環境でも、すぐに人間関係を構築することができますか？',
    relatedTraitId: 'social',
    narrowingScore: 6
  },
  
  // 縄張り意識に関する質問 (Territorial behavior)
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
  
  // 攻撃性に関する質問 (Aggressive behavior)
  {
    id: 'q6',
    text: '挑戦や競争的な状況に直面すると、闘争心が湧いてきますか？',
    relatedTraitId: 'aggressive',
    matchScore: 8
  },
  {
    id: 'q7',
    text: '不公平な扱いを受けたと感じたとき、すぐに抗議や反論をしますか？',
    relatedTraitId: 'aggressive',
    narrowingScore: 6
  },
  
  // 遊び心に関する質問 (Playful behavior)
  {
    id: 'q8',
    text: '日常の中で遊び心を持って物事に取り組むことが多いですか？',
    relatedTraitId: 'playful',
    correctnessScore: 7
  },
  {
    id: 'q9',
    text: '新しいスキルや知識を習得するとき、実験的に試してみることを楽しめますか？',
    relatedTraitId: 'playful',
    matchScore: 6
  },
  
  // 夜行性に関する質問 (Nocturnal behavior)
  {
    id: 'q10',
    text: '夜間に活動的になり、夜遅くまで起きていることが自然だと感じますか？',
    relatedTraitId: 'nocturnal',
    narrowingScore: 8
  },
  {
    id: 'q11',
    text: '朝型よりも夜型のライフスタイルを好みますか？',
    relatedTraitId: 'nocturnal',
    correctnessScore: 7
  },
  
  // 忠誠心に関する質問 (Loyal behavior)
  {
    id: 'q12',
    text: '一度信頼関係を築いた人とは、困難があっても長期的な関係を維持しようとしますか？',
    relatedTraitId: 'loyal',
    matchScore: 9
  },
  {
    id: 'q13',
    text: '親しい人のために自分の利益を犠牲にすることをいとわないと感じますか？',
    relatedTraitId: 'loyal',
    correctnessScore: 8
  },
  
  // 発声・表現に関する質問 (Vocal behavior)
  {
    id: 'q14',
    text: '自分の感情や意見を声に出して表現することが多いですか？',
    relatedTraitId: 'vocal',
    narrowingScore: 7
  },
  {
    id: 'q15',
    text: '会話の中で自分の存在感を示すことを重要視しますか？',
    relatedTraitId: 'vocal',
    matchScore: 6
  },
  
  // 好奇心に関する質問 (Curious behavior)
  {
    id: 'q16',
    text: '新しい環境や状況を探索することに強い興味を持ちますか？',
    relatedTraitId: 'curious',
    correctnessScore: 8
  },
  {
    id: 'q17',
    text: '未知の事柄について学ぶことに喜びを感じますか？',
    relatedTraitId: 'curious',
    matchScore: 7
  },
  
  // 階層意識に関する質問 (Hierarchical behavior)
  {
    id: 'q18',
    text: 'グループ内での役割や地位の明確化を重要だと考えますか？',
    relatedTraitId: 'hierarchical',
    narrowingScore: 8
  },
  {
    id: 'q19',
    text: 'リーダーシップをとる立場になることが自然だと感じますか？',
    relatedTraitId: 'hierarchical',
    matchScore: 7
  },
  
  // 独立性に関する質問 (Independent behavior)
  {
    id: 'q20',
    text: '他人の助けを借りずに、自分で問題を解決することを好みますか？',
    relatedTraitId: 'independent',
    correctnessScore: 9
  },
  {
    id: 'q21',
    text: '自分の判断や直感を信頼し、他者の意見に左右されにくいですか？',
    relatedTraitId: 'independent',
    narrowingScore: 7
  },
  
  // 保護的行動に関する質問 (Protective behavior)
  {
    id: 'q22',
    text: '親しい人が危険や困難に直面したとき、すぐに保護しようとする衝動を感じますか？',
    relatedTraitId: 'protective',
    matchScore: 8
  },
  {
    id: 'q23',
    text: '自分にとって大切な人や物を守るために、リスクを取ることをいとわないですか？',
    relatedTraitId: 'protective',
    correctnessScore: 7
  },
  
  // エネルギッシュさに関する質問 (Energetic behavior)
  {
    id: 'q24',
    text: '長時間にわたって高いエネルギーレベルを維持できますか？',
    relatedTraitId: 'energetic',
    narrowingScore: 8
  },
  {
    id: 'q25',
    text: '身体的な活動や運動に積極的に取り組むことを好みますか？',
    relatedTraitId: 'energetic',
    matchScore: 7
  },
  
  // 知性に関する質問 (Intelligent behavior)
  {
    id: 'q26',
    text: '複雑な問題に対して、創造的な解決策を見つけることが得意ですか？',
    relatedTraitId: 'intelligent',
    correctnessScore: 9
  },
  {
    id: 'q27',
    text: '新しい情報を素早く理解し、それを実際の状況に応用できますか？',
    relatedTraitId: 'intelligent',
    matchScore: 8
  },
  
  // 記憶力に関する質問 (Memory behavior)
  {
    id: 'q28',
    text: '過去の経験や学んだことを長期間にわたって正確に覚えていることが多いですか？',
    relatedTraitId: 'memory',
    narrowingScore: 8
  },
  {
    id: 'q29',
    text: '重要な日付や出来事を自然と記憶していることが多いですか？',
    relatedTraitId: 'memory',
    matchScore: 7
  },
  
  // 共感性に関する質問 (Empathetic behavior)
  {
    id: 'q30',
    text: '他者の感情や状況に敏感に反応し、深く理解できますか？',
    relatedTraitId: 'empathetic',
    correctnessScore: 9
  },
  {
    id: 'q31',
    text: '他人の視点から物事を考えることが自然にできますか？',
    relatedTraitId: 'empathetic',
    narrowingScore: 8
  },
  
  // 観察力に関する質問 (Observant behavior)
  {
    id: 'q32',
    text: '周囲の細かな変化や詳細に気づくことが多いですか？',
    relatedTraitId: 'observant',
    matchScore: 8
  },
  {
    id: 'q33',
    text: '人の行動パターンや表情の変化を敏感に察知できますか？',
    relatedTraitId: 'observant',
    correctnessScore: 7
  },
  
  // 穏やかさに関する質問 (Gentle/Calm behavior)
  {
    id: 'q34',
    text: 'ストレスの多い状況でも冷静さを保ち、落ち着いて対応できますか？',
    relatedTraitId: 'calm',
    narrowingScore: 8
  },
  {
    id: 'q35',
    text: '穏やかな態度で他者と接することを大切にしていますか？',
    relatedTraitId: 'gentle',
    matchScore: 7
  },
  
  // 警戒心に関する質問 (Alert behavior)
  {
    id: 'q36',
    text: '潜在的な危険や問題を事前に察知することが得意ですか？',
    relatedTraitId: 'alert',
    correctnessScore: 8
  },
  {
    id: 'q37',
    text: '常に周囲の状況を把握し、変化に素早く対応する習慣がありますか？',
    relatedTraitId: 'alert',
    narrowingScore: 7
  },
  
  // 適応性に関する質問 (Adaptive behavior)
  {
    id: 'q38',
    text: '新しい環境や状況に柔軟に適応することができますか？',
    relatedTraitId: 'adaptive',
    matchScore: 9
  },
  {
    id: 'q39',
    text: '予期せぬ変化や困難に直面しても、すぐに対応方法を見つけられますか？',
    relatedTraitId: 'adaptive',
    correctnessScore: 8
  },
  
  // 速さに関する質問 (Fast behavior)
  {
    id: 'q40',
    text: '素早い判断と行動を求められる状況で力を発揮できますか？',
    relatedTraitId: 'fast',
    narrowingScore: 8
  },
  {
    id: 'q41',
    text: '物事を迅速に処理し、効率的に進めることを好みますか？',
    relatedTraitId: 'fast',
    matchScore: 7
  },
  
  // 敏捷性に関する質問 (Agile behavior)
  {
    id: 'q42',
    text: '身体的にも精神的にも素早く方向転換できる柔軟性がありますか？',
    relatedTraitId: 'agile',
    correctnessScore: 8
  },
  {
    id: 'q43',
    text: '複数のタスクを同時に処理し、状況に応じて優先順位を変更できますか？',
    relatedTraitId: 'agile',
    narrowingScore: 7
  },
  
  // 集中力に関する質問 (Focused behavior)
  {
    id: 'q44',
    text: '目標を達成するために長時間集中し、邪魔を受けても簡単には気が散らないですか？',
    relatedTraitId: 'focused',
    matchScore: 9
  },
  {
    id: 'q45',
    text: '細部に注意を払いながら、全体の目標を見失わないことができますか？',
    relatedTraitId: 'focused',
    correctnessScore: 8
  },
  
  // 忍耐力に関する質問 (Resilient/Patient behavior)
  {
    id: 'q46',
    text: '困難な状況が長く続いても、忍耐強く耐え抜くことができますか？',
    relatedTraitId: 'resilient',
    narrowingScore: 9
  },
  {
    id: 'q47',
    text: '即座に結果が出なくても、長期的な目標のために努力し続けることができますか？',
    relatedTraitId: 'patient',
    matchScore: 8
  },
  
  // 協力性に関する質問 (Cooperative behavior)
  {
    id: 'q48',
    text: 'チームで働く際、共通の目標達成のために自分の役割を積極的に果たしますか？',
    relatedTraitId: 'cooperative',
    correctnessScore: 8
  },
  {
    id: 'q49',
    text: '他者と協力して問題解決する方が、一人で取り組むよりも効果的だと感じますか？',
    relatedTraitId: 'cooperative',
    narrowingScore: 7,
    negationScore: 5 // social traitとの区別のため
  }
];
