const comfortVerses = [
  {
    arabic: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وَسْعَهَا",
    english: "Allah does not burden a soul beyond that it can bear.",
    urdu: "اللہ کسی جان پر اُس کی طاقت سے زیادہ بوجھ نہیں ڈالتا۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Baqarah",
    ayah: 286
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    english: "For indeed, with hardship comes ease.",
    urdu: "بیشک ہر تنگی کے ساتھ آسانی ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Ash-Sharh",
    ayah: 6
  },
  {
    arabic: "لَا تَقۡنَطُوا۟ مِن رَّحۡمَةِ ٱللَّهِ",
    english: "Do not despair of the mercy of Allah.",
    urdu: "اللہ کی رحمت سے مایوس نہ ہو۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Az-Zumar",
    ayah: 53
  },
  {
    arabic: "إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    english: "Indeed, Allah is with the patient.",
    urdu: "بیشک اللہ صبر کرنے والوں کے ساتھ ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Baqarah",
    ayah: 153
  },
  {
    arabic: "أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَئِنُّ ٱلۡقُلُوبُ",
    english: "Verily, in the remembrance of Allah do hearts find rest.",
    urdu: "بے شک دل اللہ کے ذکر سے اطمینان پاتے ہیں۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Ar-Ra‘d",
    ayah: 28
  },
  {
    arabic: "وَنُنَزِّلُ مِنَ ٱلۡقُرۡءَانِ مَا هُوَ شِفَاءٞ وَرَحۡمَةٞۚ لِّلۡمُؤۡمِنِينَ",
    english: "And We send down of the Qur’an that which is a healing and a mercy to those who believe.",
    urdu: "اور ہم قرآن نازل کرتے ہیں جو ایمان والوں کے لئے شفا اور رحمت ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Isra",
    ayah: 82
  },
  {
    arabic: "رَّبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
    english: "My Lord, do not leave me alone [with no heir], while You are the best of inheritors.",
    urdu: "اے میرے رب! مجھے اکیلا نہ چھوڑ، اور آپ ہی بہتر وارث ہیں۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Anbiya",
    ayah: 89
  },
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    english: "And whoever fears Allah – He will make for him a way out.",
    urdu: "جو اللہ سے ڈرتا ہے اللہ اس کے لیے رہ نکلنے کا راستہ پیدا فرماتا ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "At-Talaq",
    ayah: 2
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    english: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
    urdu: "بیشک تنگی کے ساتھ آسانی ہے۔ بیشک تنگی کے ساتھ آسانی ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Ash-Sharh",
    ayah: 5
  },
  {
    arabic: "وَلَا تَيْأَسُوا مِن رَّوۡحِ ٱللَّهِ",
    english: "And do not lose hope in the relief from Allah.",
    urdu: "اللہ کی رحمت سے امید نہ توڑو۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Yusuf",
    ayah: 87
  },
  {
    arabic: "إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ",
    english: "Indeed, my Lord is near and responsive.",
    urdu: "بیشک میرا رب قریب ہے اور قبول کرنے والا ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Hud",
    ayah: 61
  },
  {
    arabic: "إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ",
    english: "Indeed, with me is my Lord; He will guide me.",
    urdu: "بیشک میرا رب میرے ساتھ ہے وہ مجھے ضرور ہدایت دے گا۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Ash-Shu‘ara",
    ayah: 62
  },
  {
    arabic: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ",
    english: "And be patient, and your patience is not but through Allah.",
    urdu: "صبر کرو، اور تمہارا صبر اللہ کے ذریعے ہی ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "An-Nahl",
    ayah: 127
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
    english: "Indeed, Allah does not allow to be lost the reward of the doers of good.",
    urdu: "بیشک اللہ نیکی کرنے والوں کا اجر ضائع نہیں ہونے دیتا۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "At-Tawbah",
    ayah: 120
  },
  {
    arabic: "وَلَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    english: "Do not despair of the mercy of Allah.",
    urdu: "اللہ کی رحمت سے ناامید نہ ہو۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Az-Zumar",
    ayah: 53
  },
  {
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    english: "And my success is not but through Allah.",
    urdu: "اور میری کامیابی اللہ کے ذریعے ہی ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Hud",
    ayah: 88
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    english: "So remember Me; I will remember you.",
    urdu: "پس تم میرا ذکر کرو، میں تمہارا ذکر کروں گا۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Baqarah",
    ayah: 152
  },
  {
    arabic: "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ",
    english: "Perhaps you dislike a thing and it is good for you.",
    urdu: "شاید تم کسی چیز کو ناپسند کرو اور وہ تمہارے لیے بہتر ہو۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Baqarah",
    ayah: 216
  },
  {
    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ",
    english: "And He is with you wherever you are.",
    urdu: "اور وہ تمہارے ساتھ ہے جہاں کہیں تم ہو۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Hadid",
    ayah: 4
  },
  {
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    english: "And whoever relies upon Allah – then He is sufficient for him.",
    urdu: "وہ اللہ پر بھروسہ کرے، تو اللہ ہی اس کے لیے کافی ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "At-Talaq",
    ayah: 3
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
    english: "Indeed, Allah loves those who rely upon Him.",
    urdu: "بیشک اللہ اُن کو پسند کرتا ہے جو اُس پر بھروسہ رکھتے ہیں۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Aal-E-Imran",
    ayah: 159
  },
  {
    arabic: "وَلَا تَيْأَسُوا مِن رَّوۡحِ اللَّهِ",
    english: "And do not lose hope in the relief from Allah.",
    urdu: "اور اللہ کی رحمت سے مایوس نہ ہو۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Yusuf",
    ayah: 87
  },
  {
    arabic: "لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    english: "There will be no fear concerning them, nor will they grieve.",
    urdu: "نہ ان پر کوئی خوف ہوگا اور نہ وہ غمگین ہوں گے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Yunus",
    ayah: 62
  },
  {
    arabic: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا ٱسۡتَعِينُوا۟ بِٱlصَّبۡرِ وَٱلصَّلَوٰةِ",
    english: "O you who have believed, seek help through patience and prayer.",
    urdu: "اے ایمان والو! صبر اور نماز کے ذریعے مدد طلب کرو۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Baqarah",
    ayah: 45
  },
  {
    arabic: "فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ",
    english: "I am near. I answer the invocation of the supplicant when he calls upon Me.",
    urdu: "میں قریب ہوں، جب کوئی مجھ سے دعا کرتا ہے تو میں اس کی دعا قبول کرتا ہوں۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Baqarah",
    ayah: 186
  },
  {
    arabic: "وَإِذَا سَـَٔلَكَ عِبَادِي عَنِّيۦ فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ",
    english: "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
    urdu: "اور میرے بندے آپ مجھ سے میرے بارے میں پوچھیں تو بے شک میں قریب ہوں، جب دعا کرتے ہیں تو قبول کرتا ہوں۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "Al-Baqarah",
    ayah: 186
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَنَا",
    english: "Indeed, Allah is with us.",
    urdu: "بیشک اللہ ہمارے ساتھ ہے۔",
    sourceEnglish: "Sahih International",
    sourceUrdu: "Kanzul Iman",
    surah: "At-Tawbah",
    ayah: 40
  }
];