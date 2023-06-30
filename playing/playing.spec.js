var Playing = require("./playing");
var playing = new Playing();

describe("secondes(heure, minute, seconde) retourne un nombre de secondes depuis minuit", function () {
  it("1 heure, 1 minute et 1 seconde", function () {
    expect(playing.secondes(1, 1, 1)).toBe(3661);
  });

  xit("13 heures, 42 minutes et 42 secondes", function () {
    expect(playing.secondes(13, 42, 42)).toBe(49362);
  });

  xit("1 heure, 1 minute et 0 seconde", function () {
    expect(playing.secondes(1, 1, 0)).toBe(3660);
  });

  xit("1 heure, 0 minute et 1 seconde", function () {
    expect(playing.secondes(1, 0, 1)).toBe(3601);
  });

  xit("0 heure, 1 minute et 1 seconde", function () {
    expect(playing.secondes(0, 1, 1)).toBe(61);
  });
});

xdescribe("Un pangramme, est une phrase contenant l'ensemble des lettres de l'alphabet. Les accents et signes de ponctuation sont à ignorer", function () {
  it("Amazingly few discotheques provide jukeboxes", function () {
    expect(playing.is_pangram("Amazingly few discotheques provide jukeboxes")).toBe(true);
  });
  xit("Je ne suis pas un pangramme", function () {
    expect(playing.is_pangram("Je ne suis pas un pangramme")).toBe(false);
  });
  xit("Sphinx of black quartz, judge my vow", function () {
    expect(playing.is_pangram("Sphinx of black quartz, judge my vow")).toBe(true);
  });
  xit("Portez ce vieux whisky au juge blond qui fume", function () {
    expect(playing.is_pangram("Portez ce vieux whisky au juge blond qui fume")).toBe(true);
  });
  xit("Bâchez la queue du wagon - taxi avec les pyjamas du fakir !", function () {
    expect(playing.is_pangram("Bâchez la queue du wagon - taxi avec les pyjamas du fakir !")).toBe(true);
  });
  xit("Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwis", function () {
    expect(playing.is_pangram("Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwis")).toBe(true);
  });
  xit("Voix ambiguë qui préfère les jattes de kiwis", function () {
    expect(playing.is_pangram("Voix ambiguë qui préfère les jattes de kiwis")).toBe(false);
  });
})

xdescribe("Un anagramme est un mot qui contient les mêmes lettres qu'un autre mot", function () {
  it("chien et niche", function () {
    expect(playing.is_anagram("chien", "niche")).toBe(true);
  });
  xit("rage et gare", function () {
    expect(playing.is_anagram("rage", "gare")).toBe(true);
  });
  xit("rable et erable", function () {
    expect(playing.is_anagram("erable", "rable")).toBe(false);
  });
  xit("Canari et ARNICA", function () {
    expect(playing.is_anagram("Canari", "ARNICA")).toBe(true);
    expect(playing.is_anagram("CANARI", "arnica")).toBe(true);
  });
})

xdescribe("Roman to Latin (or Arab) numbers", function () {
  it("I --> 1", function () {
    expect(playing.roman_to_arab("I")).toBe(1);
  });
  xit("II --> 2", function () {
    expect(playing.roman_to_arab("II")).toBe(2);
  });
  xit("IV --> 4", function () {
    expect(playing.roman_to_arab("IV")).toBe(4);
  });
  xit("V --> 5", function () {
    expect(playing.roman_to_arab("V")).toBe(5);
  });
  xit("VIII --> 8", function () {
    expect(playing.roman_to_arab("VIII")).toBe(8);
  });
  xit("IX --> 9", function () {
    expect(playing.roman_to_arab("IX")).toBe(9);
  });
  xit("XI --> 11", function () {
    expect(playing.roman_to_arab("XI")).toBe(11);
  });
  xit("L --> 50", function () {
    expect(playing.roman_to_arab("L")).toBe(50);
  });
  xit("CIX --> 109", function () {
    expect(playing.roman_to_arab("CIX")).toBe(109);
  });
  xit("MLXI --> 1061", function () {
    expect(playing.roman_to_arab("MLXI")).toBe(1061);
  });
})
xdescribe("Latin (or Arab) numbers to Roman ", function () {
  it("I --> 1", function () {
    expect(playing.arab_to_roman(1)).toBe('I');
  });
  xit("II --> 2", function () {
    expect(playing.arab_to_roman(2)).toBe('II');
  });
  xit("IV --> 4", function () {
    expect(playing.arab_to_roman(4)).toBe('IV');
  });
  xit("V --> 5", function () {
    expect(playing.arab_to_roman(5)).toBe('V');
  });
  xit("VIII --> 8", function () {
    expect(playing.arab_to_roman(8)).toBe('VIII');
  });
  xit("IX --> 9", function () {
    expect(playing.arab_to_roman(9)).toBe('IX');
  });
  xit("XI --> 11", function () {
    expect(playing.arab_to_roman(11)).toBe('XI');
  });
  xit("L --> 50", function () {
    expect(playing.arab_to_roman(50)).toBe('L');
  });
  xit("CIX --> 109", function () {
    expect(playing.arab_to_roman(109)).toBe("CIX");
  });
  xit("MLXI --> 1061", function () {
    expect(playing.arab_to_roman(1068)).toBe("MLXVIII");
  });
})
xdescribe("Caesar conversion", function () {
  it("I --> L", function () {
    expect(playing.caesar('I')).toBe('L');
  });
  xit("Bonjour --> Erqmrxu", function () {
    expect(playing.caesar('Bonjour')).toBe('Erqmrxu');
  });
  xit("Bonjour --> Erqmrxu", function () {
    expect(playing.caesar('Bonjour', 1)).toBe('Cpokpvs');
  });
})