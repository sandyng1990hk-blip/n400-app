// --- DATA ---
// 個人資料題目
const personalQuestions = [
"Why are you here today?", "What's the purpose of you being here today?", "Why are you come here today?", "Why are you eligible for the naturalization?",
"What's the reason of you being here today?", "What's the eligibility of your naturalization?", "For what reason do you file the N-400 form?",
"What's the reason of filing the N-400 form?", "What's the basis of filing this form?", "Are you filing the form under the general provision?",
"What's your basis for eligibility?","how did you get your green card?", "how did you become a permanent resident?", "Who sponsored you?","what's your sponsor's name?", "when did your sponsor become us citizen?", "Why are you eligible to become a U.S. citizen?", "What's your legal name?", "Can you confirm your legal name?",
"Could you state your full name for me?", "Do you have any other names before?", "Do you have nickname?", "Do you have previous name?",
"What's your first name?", "What's your last name?", "Can you spell your first name?", "Can you spell your last name?",
"Would you like to legally change your name today?","have you ever changed your name before?", "so you just want to keep your current name, right?",  "What's your date of birth?", "On what date were you born?", "When were you born?",
"When did you become a permanent resident?", "When did you get your green card?","when did you become a permanent resident?","do you have another country of nationality?", "Where were you born?", "What country were you born in?",
"What's your nationality?", "Are you still a citizen of that country?", "Does any of your parents US citizens?","Was one of your parents a U.S. citizen before your 18th birthday?", "Does your father US citizen?", "Does your mother US citizen?",
"Do you want the Social Security Administration to issue you an original or replacement social security card and update your immigration status with the SSA if and when you are naturalized?",
"What's the last four numbers of your Social security card?","what's your alien register number?","what's your social security number?", "Do you want the Social Security Administration to issue you a card?","Can you give me the last four numbers of your SSN?", "Do you want us to notify the SSA to update your status?",
"What's your ethnicity?", "What's your race?", "Are you Asian?", "Do you promise that everything you say is true?",
"What's your height?","How tall are you?", "What's your weight?","How much do you weigh?", "What's your eye color?",  "What color are your eyes?", "What's the color of your hair?","What's your hair color?",
"What's the best number to reach you?", "What's your phone number?","What is your cell phone number?", "Do you have email?", "Where do you live now?", "What's your current physical address?","Has your address changed since submitting your application?","how long have you lived in your current address?","When did you move to current address?", "Have you ever lived anywhere eles during the last five years?", "did you live anywhere eles before?","where did you get married?", "When did you married?" ,"What date did you enter into married?" , "Where did you live before?","Is your mailing address the same as your physical address?",
"Where did you live previously?", "What's your previous address? and when did you lived there?", "Who do you live with?", "Is your current physical address also your current mailing address?",
"What's your current marital status?", "Are you single?", "Are you married?", "How many times have you been married?",
"Is your spouse a current member of the U.S. armed forces?", "What's your spouse's name?", "Do you have any children?", "Are you currently employed?","are you currently working?","Who's your current employer?", "What do you do for a living?",
"Where do you work now?", "What's your occupation?", "What do you do previously? and since when did you work for that job?","Since when did you work at your current company","How long have you been working for your current job?", "Since when did you work there?",
"Did you travel abroad after submitting your N-400 application form?", "Where did you go for travel during the last five years?", "When and where did you go for travel during the last five years?","How many total days did you spend outside the United States during the last five years?",
"How many total trips did you take for the last five years?","how many trips have you taken outside the U.S. during the last 5 years?","Did any of your trips last more than 6 months?", "It's said that you took 4 trips during the last five years, right?", "When is your last trip?", "what's the purpose of your last trip?","Where is your last trip?", "what date did you return on the last trip?", "When and where is your last trip?", "Where did you go for the last trip?",
"have you filed your tax return last year?", "do you believed in religion freedom?", "Do you have any physical or mental condition that prevents you from learning English or civics?"
];

// Part 9 問題
const part9Questions = [
"Have you EVER claimed to be a U.S. citizen (in writing or any other way)? 你是否曾聲稱自己是美國公民（以書面或任何其他方式）？",
"Have you EVER registered to vote or voted in any Federal, state, or local election in the United States? 你是否曾在美國的任何聯邦、州或地方選舉中登記投票或參與投票？",
"Do you currently owe any overdue Federal, state, or local taxes in the United States? 你目前是否在美國欠任何過期的聯邦、州或地方稅款？",
"Since you became a lawful permanent resident, have you ever called yourself a 'nonresident alien' on a Federal, state, or local tax return or decided not to file a tax return because you considered yourself to be a nonresident? 自從你成為合法永久居民後，你是否曾在聯邦、州或地方納稅申報表上稱自己為「非居民外僑」，或因為認為自己是非居民而決定不報稅？",
"Have you EVER Been a member of, involved in, or in any way associated with any Communist or totalitarian party anywhere in the world? 你是否曾是世界上任何地方的共產黨或極權政黨的成員、參與其中或以任何方式與其關聯？",
"Have you EVER Advocated any of the following, or been a member of, involved in, or in any way associated with any group anywhere in the world that advocated any of the following: | Opposition to all organized government; | World communism; | The establishment in the United States of a totalitarian dictatorship; | The overthrow by force or violence of the Government of the United States; | The unlawful assaulting or killing of any officer of the U.S. Government; | The unlawful damage or destruction of property; | or Sabotage? 你是否曾擁護過以下任何一項，或曾是世界上任何擁護以下任何一項的團體的成員、參與其中或以任何方式與其關聯：| 反對所有有組織的政府；| 世界共產主義；| 在美國建立極權獨裁統治；| 以武力或暴力手段推翻美國政府；| 非法襲擊或殺害任何美國政府官員；| 非法損壞或破壞財產；| 或進行蓄意破壞（Sabotage）？",
"Have you EVER been a member of, involved in, or in any way associated with, or have you EVER provided money, a thing of value, services or labor, or any other assistance or support to a group that: | Used a weapon or explosive with intent to harm another person or cause damage to property? | Engaged in kidnapping, assassination, or hijacking or sabotage of an airplane, ship, vehicle, or other mode of transportation? | Threatened, attempted, conspired, prepared, planned, advocated for, or incited others to commit any of the acts listed above? 你是否曾是以下組織的成員、參與其中、與其關聯，或曾向其提供金錢、價值物、服務、勞力或其他援助：意圖傷害他人或破壞財產而使用武器或爆炸物的組織？參與綁架、暗殺、劫持或破壞飛機、船隻、車輛或其他交通工具的組織？威脅、企圖、共謀、準備、計劃、鼓吹或煽動他人從事上述行為的組織？",
"Have you EVER ordered, incited, called for, committed, assisted, helped with, or otherwise participated in any of the following: | Torture? |  Genocide? | Killing or trying to kill any person? | Intentionally and severely injuring or trying to injure any person? | Any kind of sexual contact or activity with any person who did not consent or was unable to consent? | Not letting someone practice his or her religion? | Causing harm or suffering to any person because of his or her race, religion, national origin, membership in a particular social group, or political opinion? 你是否曾下令、煽動、要求、犯下、協助、幫助或以其他方式參與以下任何行為：| a. 酷刑折磨？| b. 種族滅絕？| c. 殺害或企圖殺害任何人？| d. 故意並嚴重傷害或企圖傷害任何人？| e. 與任何未經同意、無法同意或受你或他人強迫、威脅的人進行任何形式的性接觸或性活動？| f. 阻止他人實踐其宗教信仰？| g. 因為他人的種族、宗教、國籍、特定社會團體成員身份或政治觀點而對其造成傷害或痛苦？",
"Have you EVER served in, been a member of, assisted (helped), or participated in any military or police unit? 你是否曾服役於、成為成員、協助（幫助）或參與過任何軍隊或警察部隊？",
"Have you EVER served in, been a member of, assisted (helped), or participated in any armed group (a group that carries weapons), for example: paramilitary unit, self-defense unit, vigilante unit, rebel group, or guerrilla group? 你是否曾服役於、成為成員、協助（幫助）或參與過任何武裝團體（攜帶武器的團體），例如：準軍事部隊、自衛隊、治安維持隊、反叛組織或游擊隊？",
"Have you EVER worked, volunteered, or otherwise served in a place where people were detained (forced to stay), for example, a prison, jail, prison camp, detention facility, or labor camp, or have you EVER directed or participated in any other activity that involved detaining people? 你是否曾曾在人們被拘留（被迫停留）的地方工作過、擔任志工或服役，例如監獄、看守所、戰俘營、拘留所或勞改營，或者你是否曾指導或參與過任何涉及拘留他人的活動？",
"Were you EVER a part of any group, or did you EVER help any group, unit, or organization that used a weapon against any person, or threatened to do so? 你是否曾是任何對他人使用武器或威脅使用武器的團體、部隊或組織的一員，或曾幫助過他們？",
"Have you EVER sold, provided, or transported weapons, or assisted any person in selling, providing, or transporting weapons, which you knew or believed would be used against another person? 你是否曾出售、提供或運輸過武器，或協助任何人出售、提供或運輸過你明知或相信會被用來對付他人的武器？",
"Have you EVER received any weapons training, paramilitary training, or other military-type training? 你是否曾接受過任何武器訓練、準軍事訓練或其他軍事類型的訓練？",
"Have you EVER recruited (asked), enlisted (signed up), conscripted (required to join), or used any person under 15 years of age to serve in or help an armed group, or attempted or worked with others to do so? 你是否曾招募（要求）、徵募（簽約）、徵集（強制加入）或利用過任何未滿 15 歲的人加入或協助武裝團體，或曾嘗試或與他人合作這樣做過？",
"Have you EVER used any person under 15 years of age to take part in hostilities or attempted or worked with others to do so? 你是否曾利用過任何未滿 15 歲的人參加敵對行動，或曾嘗試或與他人合作這樣做過？",
"Have you EVER committed, agreed to commit, asked someone else to commit, helped commit, or tried to commit a crime or offense for which you were NOT arrested? 你是否曾犯下、同意犯下、要求他人犯下、協助犯下或試圖犯下任何你「沒有」被逮捕的罪行或違法行為？",
"Have you EVER been arrested, cited, detained or confined by any law enforcement officer, military official (in the U.S. or elsewhere), or immigration official for any reason, or been charged with a crime or offense? 你是否曾因任何原因被任何執法官員、軍方官員（在美國或其他地方）或移民官員逮捕、傳喚、拘留或監禁，或被指控犯有罪行或違法行為？",
"If you received a suspended sentence, were placed on probation, or were paroled, have you completed your suspended sentence, probation, or parole? 如果你被判處緩刑、受監視居住或假釋，你是否已經完成緩刑、監視居住或假釋？",
"Have you EVER Engaged in prostitution, attempted to procure or import prostitutes or persons for the purpose of prostitution, or received any proceeds or money from prostitution? 你是否曾從事賣淫、試圖促成或引進妓女或為賣淫目的引進他人，或從賣淫中獲得任何收益或金錢？",
"Have you EVER Manufactured, cultivated, produced, distributed, dispensed, sold, or smuggled (trafficked) any controlled substances, illegal drugs, narcotics, or drug paraphernalia in violation of any law or regulation of a U.S. state, the United States, or a foreign country? 你是否曾違反美國任何州、美國或外國的任何法律或法規，製造、培植、生產、分發、配發、銷售或走私（販運）任何受管制物品、非法藥物、麻醉品或吸毒工具？",
"Have you EVER Been married to more than one person at the same time? 你是否曾同時與超過一人結婚？",
"Have you EVER Married someone in order to obtain an immigration benefit? 你是否曾為了獲得移民利益而與某人結婚？",
"Have you EVER Helped anyone to enter, or try to enter, the United States illegally? 你是否曾協助任何人非法進入或試圖非法進入美國？",
"Have you EVER Gambled illegally or received income from illegal gambling? 你是否曾非法賭博或從非法賭博中獲得收入？",
"Have you EVER Failed to support your dependents (pay child support) or to pay alimony (court-ordered financial support after divorce or separation)? 你是否曾未能撫養你的受撫養人（支付子女撫養費）或未能支付贍養費（離婚或分居後法院裁定的經濟支持）？",
"Have you EVER Made any misrepresentation to obtain any public benefit in the United States? 你是否曾為了在美國獲得任何公共福利而做出任何虛假陳述？",
"Have you EVER given any U.S. Government officials any information or documentation that was false, fraudulent, or misleading? 你是否曾向任何美國政府官員提供過虛假、欺詐性或誤導性的資訊或文件？",
"Have you EVER lied to any U.S. Government officials to gain entry or admission into the United States or to gain immigration benefits while in the United States? 你是否曾向任何美國政府官員撒謊，以便進入美國或在美國境內獲得移民利益？",
"Have you EVER been placed in removal, rescission, or deportation proceedings? 你是否曾被列入驅逐、撤銷或遣返程序？",
"Have you EVER been removed or deported from the United States? 你是否曾被從美國移送或驅逐出境？",
"Have you EVER left the United States to avoid being drafted in the U.S. armed forces? 你是否曾為了逃避在美國武裝部隊服役而離開美國？",
"Have you EVER applied for any kind of exemption from military service in the U.S. armed forces? 你是否曾申請過免除在美國武裝部隊服役的任何豁免？",
"Have you EVER served in the U.S. armed forces? 你是否曾在美國武裝部隊服役？",
"Are you currently a member of the U.S. armed forces?  你目前是美國武裝部隊的成員嗎？",
"Are you a former U.S. military service member who is currently residing outside of the U.S.? 你是否是目前居住在美國境外的美國退役軍人？",
"Have you EVER been court-martialed or have you received a discharge characterized as other than honorable, bad conduct, or dishonorable, while in the U.S. armed forces? 在美國武裝部隊期間，你是否曾受過軍事法庭審判，或是否曾獲得非榮譽、品行不端或不名譽的退伍處分？",
"Have you EVER been discharged from training or service in the U.S. armed forces because you were an alien? 你是否曾因為是外籍人士而從美國武裝部隊的訓練或服務中退役？",
"Have you EVER deserted from the U.S. armed forces? 你是否曾在美國武裝部隊中逃兵？",
"Do you now have, or did you EVER have, a hereditary title or an order of nobility in any foreign country? 你現在或曾經在任何外國擁有世襲頭銜或貴族爵位嗎？",
"Do you support the Constitution and form of Government of the United States? 你是否支持美國憲法和美國政府形式？",
"Do you understand the full Oath of Allegiance to the United States (see Part 16. Oath of Allegiance)? 你是否理解對美國完整的效忠誓言（見第 16 部分：效忠誓言）？",
"Are you unable to take the Oath of Allegiance because of a physical or developmental disability or mental impairment? 你是否因為身體、發育缺陷或精神障礙而無法進行效忠宣誓？",
"Are you willing to take the full Oath of Allegiance to the United States? 你是否願意宣讀對美國完整的效忠誓言？",
"If the law requires it, are you willing to bear arms (carry weapons) on behalf of the United States? 如果法律要求，你是否願意代表美國拿起武器（攜帶武器）？",
"If the law requires it, are you willing to perform noncombatant services (do something that does not include fighting in a war) in the U.S. armed forces? 如果法律要求，你是否願意在美國武裝部隊中從事非戰鬥服務（不包括參加戰爭的工作）？",
"If the law requires it, are you willing to perform work of national importance under civilian direction (do non-military work that the U.S. Government says is important to the country)? 如果法律要求，你是否願意在文職人員的指導下從事對國家有重大影響的工作（從事美國政府認為對國家重要的非軍事工作）？"
];


// Glossary Data
const glossaryData = [
  // Category 1: 個人行為
            { word: "Claim", phonetic: "/kleɪm/", chinese: "聲稱", def: "Means To say something.", cat: 1 },
            { word: "Registered", phonetic: "/ˈredʒɪstərd/", chinese: "登記", def: "Means To sign up.", cat: 1 },
            { word: "Vote", phonetic: "/voʊt/", chinese: "投票", def: "Means To choose a leader.", cat: 1 },
            { word: "Owe taxes", phonetic: "/oʊ tæksɪz/", chinese: "欠稅", def: "Means Not pay money to government.", cat: 1 },
            { word: "Pay taxes", phonetic: "/peɪ tæksɪz/", chinese: "納稅", def: "Means Give money to government.", cat: 1 },
            { word: "Nonresident", phonetic: "/ˌnɑːnˈrezɪdənt/", chinese: "非居民", def: "Means Not living here.", cat: 1 },
            { word: "Nonresident alien", phonetic: "/...ˈeɪliən/", chinese: "非居民外僑", def: "Means Not a U.S. resident.", cat: 1 },
            { word: "Alien", phonetic: "/ˈeɪliən/", chinese: "外國人/外僑", def: "Means Not a U.S. citizen.", cat: 1 },
            { word: "Provide", phonetic: "/prəˈvaɪd/", chinese: "提供", def: "Means To give.", cat: 1 },
            { word: "Detained", phonetic: "/dɪˈteɪnd/", chinese: "被拘留", def: "Means Held by the police.", cat: 1 },
            { word: "Training", phonetic: "/ˈtreɪnɪŋ/", chinese: "訓練", def: "Means Learning how to do something.", cat: 1 },
            { word: "Arrested", phonetic: "/əˈrestɪd/", chinese: "被逮捕", def: "Means Taken by the police.", cat: 1 },
            { word: "Convicted", phonetic: "/kənˈvɪktɪd/", chinese: "被定罪", def: "Means Found guilty by law.", cat: 1 },
            { word: "Prostitution", phonetic: "/ˈprɑːstɪtuːʃən/", chinese: "賣淫者/賣淫", def: "Means have Sex for money.", cat: 1 },
            { word: "Prostitute", phonetic: "/ˈprɑːstɪtuːt/", chinese: "賣淫者/賣淫", def: "Means have Sex for money.", cat: 1 },
            { word: "Gamble", phonetic: "/ˈɡæmbl/", chinese: "賭博", def: "Means Playing for money.", cat: 1 },
            { word: "Gambling", phonetic: "/ˈgæmblɪŋ/", chinese: "賭博", def: "Means Playing for money.", cat: 1 },
            { word: "FALSE", phonetic: "/fɔːls/", chinese: "虛假", def: "Means Something is not true.", cat: 1 },
            { word: "Truth", phonetic: "/truːθ/", chinese: "真相", def: "Means Not a lie.", cat: 1 },
            { word: "Lie", phonetic: "/laɪ/", chinese: "說謊", def: "Means not tell the truth.", cat: 1 },
            { word: "Support", phonetic: "/səˈpɔːrt/", chinese: "支持", def: "Means To agree with.", cat: 1 },
            { word: "Understand", phonetic: "/ˌʌndərˈstænd/", chinese: "理解", def: "Means Knowing what it means.", cat: 1 },
            { word: "Willing", phonetic: "/ˈwɪlɪŋ/", chinese: "願意", def: "Means agree to do it.", cat: 1 },
            { word: "Bear arms", phonetic: "/ber ɑːrmz/", chinese: "持武器", def: "Means use a gun.", cat: 1 },

            // Category 2: 違法行為
            { word: "Terrorist", phonetic: "/ˈterərɪst/", chinese: "恐怖分子", def: "Means A violent person.", cat: 2 },
            { word: "Sabotage", phonetic: "/ˈsæbətɑːʒ/", chinese: "蓄意破壞", def: "Means To damage on purpose.", cat: 2 },
            { word: "Weapon", phonetic: "/ˈwepən/", chinese: "武器", def: "Like a gun or knife.", cat: 2 },
            { word: "Explosive", phonetic: "/ɪkˈsploʊsɪv/", chinese: "炸藥", def: "Like a bomb.", cat: 2 },
            { word: "Kidnapping", phonetic: "/ˈkɪdnæpɪŋ/", chinese: "綁架", def: "Means Taking someone by force.", cat: 2 },
            { word: "Assassination", phonetic: "/əˌsæsɪˈneɪʃən/", chinese: "暗殺", def: "Means Killing a leader.", cat: 2 },
            { word: "Torture", phonetic: "/ˈtɔːrtʃər/", chinese: "酷刑", def: "Means To hurt someone badly.", cat: 2 },
            { word: "Genocide", phonetic: "/ˈdʒenəsaɪd/", chinese: "種族滅絕", def: "Means To kill a whole group.", cat: 2 },
            { word: "Kill", phonetic: "/kɪl/", chinese: "殺害", def: "Means To take a life.", cat: 2 },
            { word: "Injure", phonetic: "/ˈɪndʒə/", chinese: "傷害", def: "Means To hurt someone.", cat: 2 },
            { word: "Crime", phonetic: "/kraɪm/", chinese: "犯罪/違法行為", def: "Means Breaking the law.", cat: 2 },
            { word: "Illegal drugs", phonetic: "/ɪˈliːɡəl drʌɡz/", chinese: "毒品", def: "Means Bad medicine.", cat: 2 },
            { word: "Smuggled", phonetic: "/ˈsmʌɡəld/", chinese: "走私", def: "Means Bringing things secretly.", cat: 2 },
            { word: "Habitual drunkard", phonetic: "/...ˈdrʌŋkərd/", chinese: "習慣性酗酒者", def: "Means Drinks too much alcohol.", cat: 2 },
            { word: "Polygamy", phonetic: "/pəˈlɪɡəmi/", chinese: "多配偶制", def: "Means More than one spouse.", cat: 2 },
            { word: "Illegally", phonetic: "/ɪˈliːɡəli/", chinese: "非法", def: "Means Against the law.", cat: 2 },
            { word: "Noncombatant", phonetic: "/...ˈbætənt/", chinese: "非戰鬥", def: "Means Not fighting.", cat: 2 },

            // Category 3: 政府組織
            { word: "Organization", phonetic: "/...ˈzeɪʃən/", chinese: "組織/團體", def: "Means A group of people.", cat: 3 },
            { word: "Communist", phonetic: "/ˈkɑːmjunɪzəm/", chinese: "共產黨/共產主義", def: "Means No freedom.", cat: 3 },
            { word: "Communism", phonetic: "/ˈkɑːmjunɪzəm/", chinese: "共產黨/共產主義", def: "Means No freedom.", cat: 3 },
            { word: "Totalitarian", phonetic: "/...ˈteriən/", chinese: "極權政黨", def: "Means Government has total control.", cat: 3 },
            { word: "Totalitarian Party", phonetic: "/...ˈteriən/", chinese: "極權政黨", def: "Means Government has total control.", cat: 3 },
            { word: "Overthrow", phonetic: "/ˌoʊvərˈθroʊ/", chinese: "推翻", def: "Means To take down the government.", cat: 3 },
            { word: "Police unit", phonetic: "/pəˈliːs ˈjuːnɪt/", chinese: "警察部隊", def: "Means Law enforcement.", cat: 3 },
            { word: "Public benefit", phonetic: "/ˈbenɪfɪt/", chinese: "公共福利", def: "Means Government help.", cat: 3 },
            { word: "Constitution", phonetic: "/ˌkɑːnstɪˈtuːʃən/", chinese: "憲法", def: "Means Supreme law of the land.", cat: 3 },
            { word: "Form of Government", phonetic: "/...ˈɡʌvərnmənt/", chinese: "美國政府形式", def: "It's Republic. (or Democracy)", cat: 3 },
            { word: "Oath / Oath of Allegiance", phonetic: "/...ˈliːdʒəns/", chinese: "效忠誓言", def: "Means A promise to be loyal.", cat: 3 },

            // Category 4: 地方地點
            { word: "Prison", phonetic: "/ˈprɪzn/", chinese: "監獄", def: "Means Place for criminals.", cat: 4 },
            { word: "Jail", phonetic: "/dʒeɪl/", chinese: "監獄", def: "Means Place for criminals.", cat: 4 },
            { word: "Labor camp", phonetic: "/ˈleɪbər kæmp/", chinese: "勞改營/勞動營", def: "Means a Place for forced work.", cat: 4 },
            { word: "Military", phonetic: "/ˈmɪləteri/", chinese: "軍隊", def: "Means The army.", cat: 4 },
            { word: "Deportation", phonetic: "/...ˈteɪʃən/", chinese: "驅逐出境", def: "Means Forced to leave the U.S.", cat: 4 },
            { word: "Removed", phonetic: "/rɪˈmuːvd/", chinese: "遣返", def: "Means Sent back to your country.", cat: 4 },
            { word: "Anywhere in the world", phonetic: "/ˈeniwer/", chinese: "世界任何地方", def: "Means Every place.", cat: 4 },
];



// --- STATE ---
let currentMode = '';
let glossaryCategory = 0;
let questionQueue = [];
let currentIndex = 0;
let isRevealed = false;
let isSessionStarted = false;
let bookmarks = JSON.parse(localStorage.getItem('n400_bookmarks_v2')) || { personal: [], part9: [], glossary: [] };
let currentTab = 'personal';
let synth = window.speechSynthesis;
let currentVoice = null;
let audioTimeout = null;
let audioSequenceTimeouts = [];

// --- DOM ELEMENTS ---
const homeScreen = document.getElementById('home-screen');
const glossaryMenuScreen = document.getElementById('glossary-menu-screen');
const practiceScreen = document.getElementById('practice-screen');
const bookmarkScreen = document.getElementById('bookmark-screen');
const audioAnim = document.getElementById('audio-anim');
const qBox = document.getElementById('q-box');
const qHidden = document.getElementById('q-hidden');
const qText = document.getElementById('q-text');
const qCounter = document.getElementById('q-current');
const qTotal = document.getElementById('q-total');
const starBtn = document.getElementById('btn-star');
const mainBtn = document.getElementById('main-btn');
// --- FUNCTIONS ---

// 小紅書跳轉
function goToXiaohongshu() {
    // 請將下方的網址替換為你複製的小紅書主頁連結
    const myRedBookUrl = "https://www.xiaohongshu.com/user/profile/631f3bfd00000000230254b1";
    
   // 判斷是否為電腦端 (如果寬度大於 1024px 通常是電腦)
    if (window.innerWidth > 1024) {
        // 電腦端：強制開啟新分頁，避免被原頁面攔截
        window.open(myRedBookUrl, "_blank");
    } else {
        // 手機端：保持現有的跳轉方式，這能呼起小紅書 App
        window.location.href = myRedBookUrl;
    }
}

// 洗牌
function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        [array[curId], array[randId]] = [array[randId], array[curId]]; 
    }
    return array;
}

// 切換 Glossary 菜單
function showGlossaryMenu() {
    homeScreen.classList.add('hidden');
    glossaryMenuScreen.classList.remove('hidden');
}
function exitGlossaryMenu() {
    glossaryMenuScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

// 啟動練習
function startSession(mode, catId = 0) {
    currentMode = mode;
    glossaryCategory = catId;
    let pool = [];

    if (mode === 'personal') {
        pool = [...personalQuestions];
        questionQueue = shuffleArray(pool);
    } else if (mode === 'part9') {
        pool = [...part9Questions];
        questionQueue = shuffleArray(pool);
    } else if (mode === 'glossary') {
        pool = glossaryData.filter(item => item.cat === catId);
        questionQueue = shuffleArray(pool);
    }

    if (questionQueue.length === 0) {
        alert("目前清單是空的喔！");
        return;
    }
    currentIndex = 0;
    isSessionStarted = false;

    homeScreen.classList.add('hidden');
    glossaryMenuScreen.classList.add('hidden');
    practiceScreen.classList.remove('hidden');

    updateMainButtonText();
    loadQuestion(false);
}

// 重新開始
function restartSession() {
    clearAudio();
    if (currentMode === 'glossary') {
        startSession(currentMode, glossaryCategory);
    } else {
        startSession(currentMode);
    }
}

// 退出練習
function exitPractice() {
    clearAudio();
    practiceScreen.classList.add('hidden');
    if (currentMode === 'glossary') {
        glossaryMenuScreen.classList.remove('hidden');
    } else {
        homeScreen.classList.remove('hidden');
    }
}

// 清除語音動畫與時間軸
function clearAudio() {
    synth.cancel();
    if (audioTimeout) clearTimeout(audioTimeout);
    audioSequenceTimeouts.forEach(t => clearTimeout(t));
    audioSequenceTimeouts = [];
    setAnimation(false);
}

// 更新主按鈕文字
function updateMainButtonText() {
    mainBtn.innerHTML = isSessionStarted ? "我回答<br>完了" : "開始<br>面試";
}

// 主按鈕行為
function handleMainAction() {
    clearAudio();
    if (!isSessionStarted) {
        isSessionStarted = true;
        updateMainButtonText();
        audioTimeout = setTimeout(() => playCurrentAudio(), 500);
    } else {
        nextQuestion();
    }
}

// 取得當前題目
function getCurrentItem() {
    return questionQueue[currentIndex];
}

// 取得字串識別
function getQString(item) {
    return typeof item === 'string' ? item : item.word;
}

// 載入題目
function loadQuestion(autoPlay) {
    if (currentIndex >= questionQueue.length) {
        alert("練習完成！即將返回主頁。");
        exitPractice();
        return;
    }

    isRevealed = false;
    qHidden.classList.remove('hidden');
    qText.classList.add('hidden');
    qText.innerHTML = "";

    qCounter.innerText = currentIndex + 1;
    qTotal.innerText = questionQueue.length;

    updateBookmarkButtonState();

    if (autoPlay) audioTimeout = setTimeout(() => playCurrentAudio(), 500);
}

// 顯示 / 隱藏題目卡
function toggleQuestionCard() {
    if (isRevealed) {
        isRevealed = false;
        qHidden.classList.remove('hidden');
        qText.classList.add('hidden');
    } else {
        isRevealed = true;
        qHidden.classList.add('hidden');
        qText.classList.remove('hidden');

        const item = getCurrentItem();

        if (currentMode === 'glossary') {
            qText.innerHTML = `
                <div class="gloss-content">
                    <div class="gloss-word">${item.word}</div>
                    <div class="gloss-phonetic">${item.phonetic}</div>
                    <div class="gloss-cn">${item.chinese}</div>
                    <div class="gloss-divider"></div>
                    <div class="gloss-def-container">
                        <div class="gloss-def">${item.def}</div>
                        <button class="btn audio-sm-btn" onclick="event.stopPropagation(); speakText('${item.def.replace(/'/g, "\\'")}')">🔊</button>
                    </div>
                </div>`;
        } else {
            qText.innerText = item;
        }
    }
}

// 下一題
function nextQuestion() {
    currentIndex++;
    loadQuestion(true);
}

// 播放當前題目語音
function playCurrentAudio() {
    const item = getCurrentItem();
    if (currentMode === 'glossary') {
        speakGlossaryPhrase(item.word);
    } else {
        speakText(item, true);
    }
}

// 重播
function replayAudio() {
    clearAudio();
    playCurrentAudio();
}

// 語音動畫控制
function setAnimation(isActive) {
    audioAnim.classList.toggle('playing', isActive);
}

// 語音朗讀

function speakText(text, showAnim = false) {
    // 先清理掉之前正在讀的內容
    synth.cancel();

    // 1. 只提取英文部分進行朗讀（避免語音引擎嘗試讀中文）
    const englishText = text.split(/[\u4e00-\u9fa5]/)[0].trim();

    // 2. 依照 "|" 符號拆分英文段落
    const segments = englishText.split('|');
    let currentSegment = 0;

    // 定義一個內部的播放函數來實現循環停頓
    function playNext() {
        if (currentSegment < segments.length) {
            const utterance = new SpeechSynthesisUtterance(segments[currentSegment].trim());
            utterance.lang = 'en-US';
            utterance.rate = 0.9;

            // 定義一個函數來選取最好的聲音
function getBestVoice() {
    let voices = synth.getVoices();
    
    // 優先順序：1. iPhone 的 Samantha | 2. Google 的高品質音 | 3. 任何 en-US 的聲音
    return voices.find(v => v.name.includes('Samantha')) || 
           voices.find(v => v.name.includes('Google US English')) ||
           voices.find(v => v.lang === 'en-US' && v.name.includes('Enhanced')) ||
           voices.find(v => v.lang.startsWith('en-US')) ||
           voices[0];
}

// 播放函數
function speak(text) {
    if (synth.speaking) { synth.cancel(); } // 如果正在說話，先停止

    const utterance = new SpeechSynthesisUtterance(text);
    
    // 關鍵：每次播放前重新獲取一次最好的聲音，確保手機已加載完成
    utterance.voice = getBestVoice();
    
    // 參數調整
    utterance.rate = 0.85;  // 稍慢，適合練習
    utterance.pitch = 1.0;  // 音調正常
    
    synth.speak(utterance);
}

// 解決 Chrome/Safari 的異步加載問題
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getBestVoice;
}

            // 動態效果控制
            if (showAnim) {
                utterance.onstart = () => setAnimation(true);
                // 注意：這裡不直接設為 false，改在 onend 判斷
            }

            // 當這一段讀完後的處理
            utterance.onend = () => {
                currentSegment++;
                if (currentSegment < segments.length) {
                    // 關鍵：如果還沒讀完，關閉動畫並等待 2 秒再讀下一段
                    if (showAnim) setAnimation(false); 
                    setTimeout(playNext, 2000); 
                } else {
                    // 全部讀完後，確保動畫關閉
                    if (showAnim) setAnimation(false);
                }
            };

            utterance.onerror = () => {
                if (showAnim) setAnimation(false);
            };

            synth.speak(utterance);
        }
    }

    // 開始執行第一段播放
    playNext();
}


// Glossary 專用朗讀
function speakGlossaryPhrase(word) {
    clearAudio();
    setAnimation(true);

    const rate = 0.85;
    const u1 = new SpeechSynthesisUtterance("What does");
    u1.lang = 'en-US'; u1.rate = rate;
    const u2 = new SpeechSynthesisUtterance(word);
    u2.lang = 'en-US'; u2.rate = 0.75;
    const u3 = new SpeechSynthesisUtterance("mean?");
    u3.lang = 'en-US'; u3.rate = rate;

    u1.onend = () => audioSequenceTimeouts.push(setTimeout(() => synth.speak(u2), 200));
    u2.onend = () => audioSequenceTimeouts.push(setTimeout(() => synth.speak(u3), 200));
    u3.onend = () => setAnimation(false);
    u1.onerror = u2.onerror = u3.onerror = () => setAnimation(false);

    synth.speak(u1);
}

// --- BOOKMARKS ---
function updateBookmarkButtonState() {
    const item = getCurrentItem();
    const val = getQString(item);
    const listKey = currentMode === 'glossary' ? 'glossary' : currentMode;
    const list = bookmarks[listKey];

    if (list.includes(val)) {
        starBtn.innerText = "★";
        starBtn.classList.add('bookmarked');
    } else {
        starBtn.innerText = "☆";
        starBtn.classList.remove('bookmarked');
    }
}

function toggleBookmark() {
    const item = getCurrentItem();
    const val = getQString(item);
    const listKey = currentMode === 'glossary' ? 'glossary' : currentMode;
    const list = bookmarks[listKey];
    const idx = list.indexOf(val);

    if (idx > -1) list.splice(idx, 1);
    else list.push(val);

    saveBookmarks();
    updateBookmarkButtonState();
}

function saveBookmarks() {
    localStorage.setItem('n400_bookmarks_v2', JSON.stringify(bookmarks));
}

// 書籤頁面
function showBookmarks() {
    homeScreen.classList.add('hidden');
    bookmarkScreen.classList.remove('hidden');
    switchTab('personal');
}
function exitBookmarks() {
    clearAudio();
    bookmarkScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
}

function switchTab(tab) {
    currentTab = tab;
    document.getElementById('tab-personal').classList.toggle('active', tab === 'personal');
    document.getElementById('tab-part9').classList.toggle('active', tab === 'part9');
    document.getElementById('tab-glossary').classList.toggle('active', tab === 'glossary');
    renderBookmarkList();
}

function renderBookmarkList() {
    const container = document.getElementById('bookmark-list');
    container.innerHTML = "";

    const list = bookmarks[currentTab];
    if (!list || list.length === 0) {
        container.innerHTML = `<div style="text-align:center; color:#999; margin-top:50px;">暫無收藏</div>`;
        return;
    }

    list.forEach(val => {
        const item = document.createElement('div');
        item.className = 'list-item';
        const safeVal = val.replace(/'/g, "\\'");
        let displayText = val;
        let audioAction = `speakText('${safeVal}', false)`;

        if (currentTab === 'glossary') {
            const found = glossaryData.find(g => g.word === val);
            audioAction = `speakGlossaryPhrase('${safeVal}')`;
            if (found) displayText = `<b>${found.word}</b><br><span style="font-size:14px;color:#666">${found.chinese}</span>`;
        }

        item.innerHTML = `
            <button class="btn list-audio-btn" onclick="${audioAction}">🔊</button>
            <div class="list-text">${displayText}</div>
            <div class="list-remove" onclick="removeBookmarkFromList('${safeVal}')">🗑️</div>
        `;
        container.appendChild(item);
    });
}

function removeBookmarkFromList(val) {
    const list = bookmarks[currentTab];
    const idx = list.indexOf(val);
    if (idx > -1) {
        list.splice(idx, 1);
        saveBookmarks();
        renderBookmarkList();
    }
}
