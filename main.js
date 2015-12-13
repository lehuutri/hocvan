all_sounds = [["a", "oa", "ac", "oac", "ach", "oach", "ai", "oai", "am", "oam", "an", "oan", "ang", "oang", "anh", "oanh", "ao", "ap", "at", "oat", "au", "ay", "oay"],
                ["ă", "ăc", "oăc", "ăm", "oăm", "ăn", "oăn", "ăng", "ăp", "ăt", "oăt"],
                ["â", "âc", "âm", "ân", "uân", "âng", "uâng", "âp", "ât", "uât", "âu", "ây", "uây"],
                ["e", "oe", "ec", "em", "en", "oen", "eng", "oeng", "eo", "oeo", "ep", "et", "oet"],
                ["ê", "uê", "êch", "êm", "ên", "ênh", "êp", "êt", "êu"],
                ["i", "uy", "ia", "ich", "iêc", "iêm", "iên", "uyên", "iêng", "iêp", "iêt", "uyêt", "iêu", "im", "in", "inh", "uynh", "ip", "it", "uyt", "iu", "uyu"],
                ["o", "oc", "oi", "om", "on", "op", "ot"],
                ["ô", "ốc", "ôi", "ôm", "ôn", "ông", "ôp", "ôt"],
                ["ơ", "ơi", "ơm", "ơn", "ơp", "ơt"],
                ["u", "ua", "uc", "ui", "um", "un", "ung", "uôc", "uôi", "uôm", "uôn", "uông", "uôt", "up", "ut"],
                ["ư", "ưa", "ưc", "ưi", "ưm", "ưn", "ưng", "ươc", "ươi", "ươm", "ươn", "ương", "ươp", "ươt", "ươu", "ưt", "ưu"]]    

function random_sound() {
    var row, col;
    row = Math.floor((Math.random() * (all_sounds.length - 1))) + 1;
    col = Math.floor((Math.random() * (all_sounds[row].length - 1))) + 1;
    return all_sounds[row][col]
}
