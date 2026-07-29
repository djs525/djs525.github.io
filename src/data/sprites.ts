/**
 * Hand-authored pixel art. Each sprite is one or more frames of a 16-column
 * grid of palette keys; '.' is transparent. Frames cycle as an idle loop, the
 * way a unit breathes on a roster screen.
 *
 * Frame 2 always differs deliberately — a blink, a pulse, a moving highlight —
 * never a shift of the whole body, which reads as jitter rather than life.
 */

export interface Sprite {
  readonly frames: readonly (readonly string[])[];
  readonly palette: Readonly<Record<string, string>>;
  /** Seconds for one full cycle. Varied per unit so the roster never pulses in lockstep. */
  readonly cycle: number;
}

const OUTLINE = "#14203d";
const HIGHLIGHT = "#fffaf0";

/** BrawlBot — a blocky bot head. Frame 2 blinks and drops its mouth bar. */
export const SPRITE_BOT: Sprite = {
  frames: [
    [
      ".......KK.......",
      ".......KK.......",
      "....KKKKKKKK....",
      "...KBBBBBBBBK...",
      "..KBBBBBBBBBBK..",
      "..KBCCBBBBCCBK..",
      "..KBCCBBBBCCBK..",
      "..KBBBBBBBBBBK..",
      "..KBBKKKKKKBBK..",
      "..KBBKWWWWKBBK..",
      "..KBBKKKKKKBBK..",
      "...KBBBBBBBBK...",
      "....KKKKKKKK....",
      ".....K....K.....",
      "....KK....KK....",
      "................",
    ],
    [
      ".......KK.......",
      ".......KK.......",
      "....KKKKKKKK....",
      "...KBBBBBBBBK...",
      "..KBBBBBBBBBBK..",
      "..KBBBBBBBBBBK..",
      "..KBKKBBBBKKBK..",
      "..KBBBBBBBBBBK..",
      "..KBBKKKKKKBBK..",
      "..KBBKKKKKKBBK..",
      "..KBBKWWWWKBBK..",
      "...KBBBBBBBBK...",
      "....KKKKKKKK....",
      ".....K....K.....",
      "....KK....KK....",
      "................",
    ],
  ],
  palette: { K: OUTLINE, B: "#7c5cff", C: "#35d6f5", W: HIGHLIGHT },
  cycle: 2.2,
};

/** GSD.AI — a map marker. Frame 2 contracts the scan pulse at its centre. */
export const SPRITE_PIN: Sprite = {
  frames: [
    [
      ".....KKKKKK.....",
      "...KKRRRRRRKK...",
      "..KRRRRRRRRRRK..",
      "..KRRRWWWWRRRK..",
      ".KRRWWWWWWWWRRK.",
      ".KRRWWWWWWWWRRK.",
      "..KRRRWWWWRRRK..",
      "..KRRRRRRRRRRK..",
      "...KRRRRRRRRK...",
      "....KRRRRRRK....",
      ".....KRRRRK.....",
      "......KRRK......",
      ".......KK.......",
      "................",
      "...KKKK..KKKK...",
      "................",
    ],
    [
      ".....KKKKKK.....",
      "...KKRRRRRRKK...",
      "..KRRRRRRRRRRK..",
      "..KRRRRRRRRRRK..",
      ".KRRRRWWWWRRRRK.",
      ".KRRRRWWWWRRRRK.",
      "..KRRRRRRRRRRK..",
      "..KRRRRRRRRRRK..",
      "...KRRRRRRRRK...",
      "....KRRRRRRK....",
      ".....KRRRRK.....",
      "......KRRK......",
      ".......KK.......",
      "................",
      "..KKKKKK..KKKK..",
      "................",
    ],
  ],
  palette: { K: OUTLINE, R: "#ff4d8d", W: HIGHLIGHT },
  cycle: 1.8,
};

/** Cortex — a processor die. Frame 2 fires a different set of traces. */
export const SPRITE_CHIP: Sprite = {
  frames: [
    [
      "....K.K.K.K.K...",
      "..KKKKKKKKKKKK..",
      "..KPPPPPPPPPPK..",
      "KKKPKKPPPPKKPKKK",
      "..KPKGGPPGGKPK..",
      "..KPPGGPPGGPPK..",
      "..KPPPPPPPPPPK..",
      "KKKPPKKKKKKPPKKK",
      "..KPPKGGGGKPPK..",
      "..KPPKGGGGKPPK..",
      "..KPPKKKKKKPPK..",
      "KKKPPPPPPPPPPKKK",
      "..KPPPPPPPPPPK..",
      "..KKKKKKKKKKKK..",
      "....K.K.K.K.K...",
      "................",
    ],
    [
      "....K.K.K.K.K...",
      "..KKKKKKKKKKKK..",
      "..KPPPPPPPPPPK..",
      "KKKPKKPPPPKKPKKK",
      "..KPKPPGGPPKPK..",
      "..KPPPPGGPPPPK..",
      "..KPPPPPPPPPPK..",
      "KKKPPKKKKKKPPKKK",
      "..KPPKPPGGKPPK..",
      "..KPPKGGPPKPPK..",
      "..KPPKKKKKKPPK..",
      "KKKPPPPPPPPPPKKK",
      "..KPPPPPPPPPPK..",
      "..KKKKKKKKKKKK..",
      "....K.K.K.K.K...",
      "................",
    ],
  ],
  palette: { K: OUTLINE, P: "#3f4d78", G: "#43dd80" },
  cycle: 1.4,
};

/** F1 Strategy Lab — a race helmet. Frame 2 sweeps the visor highlight. */
export const SPRITE_HELMET: Sprite = {
  frames: [
    [
      ".....KKKKKK.....",
      "...KKOOOOOOKK...",
      "..KOOOOOOOOOOK..",
      ".KOOOOOOOOOOOOK.",
      ".KOOWWWWWWWWOOK.",
      "KOOWWWWWWWWWWOOK",
      "KOOWWWWWWWWWWOOK",
      "KOOOOOOOOOOOOOOK",
      "KOOOOOOOOOOOOOOK",
      ".KOOOOOOOOOOOOK.",
      ".KKOOOOOOOOOOKK.",
      "...KKOOOOOOKK...",
      ".....KKKKKK.....",
      "................",
      "................",
      "................",
    ],
    [
      ".....KKKKKK.....",
      "...KKOOOOOOKK...",
      "..KOOOOOOOOOOK..",
      ".KOOOOOOOOOOOOK.",
      ".KOOWWWWWWWWOOK.",
      "KOOWWHHWWWWWWOOK",
      "KOOWWHHWWWWWWOOK",
      "KOOOOOOOOOOOOOOK",
      "KOOOOOOOOOOOOOOK",
      ".KOOOOOOOOOOOOK.",
      ".KKOOOOOOOOOOKK.",
      "...KKOOOOOOKK...",
      ".....KKKKKK.....",
      "................",
      "................",
      "................",
    ],
  ],
  palette: { K: OUTLINE, O: "#ff7a2f", W: "#35d6f5", H: HIGHLIGHT },
  cycle: 2.6,
};

/** The player character. Frame 2 blinks. */
export const SPRITE_PLAYER: Sprite = {
  frames: [
    [
      ".....KKKKKK.....",
      "....KHHHHHHK....",
      "...KHHHHHHHHK...",
      "...KHSSSSSSHK...",
      "...KSSSSSSSSK...",
      "...KSSKSSKSSK...",
      "...KSSSSSSSSK...",
      "...KSWWWWWWSK...",
      "....KSSSSSSK....",
      ".....KKSSKK.....",
      "...KKKKSSKKKK...",
      "..KGGGGGGGGGGK..",
      "..KGGGGGGGGGGK..",
      "..KGGKKGGKKGGK..",
      "..KKK..KK..KKK..",
      "................",
    ],
    [
      ".....KKKKKK.....",
      "....KHHHHHHK....",
      "...KHHHHHHHHK...",
      "...KHSSSSSSHK...",
      "...KSSSSSSSSK...",
      "...KSSSSSSSSK...",
      "...KSSKSSKSSK...",
      "...KSWWWWWWSK...",
      "....KSSSSSSK....",
      ".....KKSSKK.....",
      "...KKKKSSKKKK...",
      "..KGGGGGGGGGGK..",
      "..KGGGGGGGGGGK..",
      "..KGGKKGGKKGGK..",
      "..KKK..KK..KKK..",
      "................",
    ],
  ],
  palette: {
    K: OUTLINE,
    H: "#2b1c14",
    S: "#e0a878",
    W: "#ffffff",
    G: "#2f6ff2",
  },
  cycle: 3.4,
};

/** A trophy. Frame 2 sweeps a shine across the cup. */
export const SPRITE_TROPHY: Sprite = {
  frames: [
    [
      "..KKKKKKKKKKKK..",
      "..KGGGGGGGGGGK..",
      "KKKGGGGGGGGGGKKK",
      "KYKGGGGGGGGGGKYK",
      "KYKGGGGGGGGGGKYK",
      "KYKKGGGGGGGGKKYK",
      "KYYKGGGGGGGGKYYK",
      ".KKKKGGGGGGKKKK.",
      "....KKGGGGKK....",
      "......KGGK......",
      "......KGGK......",
      ".....KKGGKK.....",
      "....KGGGGGGK....",
      "...KGGGGGGGGK...",
      "...KKKKKKKKKK...",
      "................",
    ],
    [
      "..KKKKKKKKKKKK..",
      "..KGGWWGGGGGGK..",
      "KKKGGWWGGGGGGKKK",
      "KYKGGGWWGGGGGKYK",
      "KYKGGGGWWGGGGKYK",
      "KYKKGGGGWWGGKKYK",
      "KYYKGGGGGWWGKYYK",
      ".KKKKGGGGGGKKKK.",
      "....KKGGGGKK....",
      "......KGGK......",
      "......KGGK......",
      ".....KKGGKK.....",
      "....KGGGGGGK....",
      "...KGGGGGGGGK...",
      "...KKKKKKKKKK...",
      "................",
    ],
  ],
  palette: { K: OUTLINE, G: "#ffc93c", Y: "#e09b1a", W: HIGHLIGHT },
  cycle: 2.0,
};

/** A controller. Frame 2 presses the right-hand buttons. */
export const SPRITE_CONTROLLER: Sprite = {
  frames: [
    [
      "................",
      "................",
      "...KKKKKKKKKK...",
      "..KCCCCCCCCCCK..",
      ".KCCCCCCCCCCCCK.",
      "KCCKCKCCCCRCCCCK",
      "KCKKKKCCCCCRCCCK",
      "KCCKCKCCCCMCCCCK",
      "KCCCCCCCCCCCCCCK",
      "KCCCCCCCCCCCCCCK",
      ".KCCKKKKKKKKCCK.",
      ".KKK........KKK.",
      "................",
      "................",
      "................",
      "................",
    ],
    [
      "................",
      "................",
      "...KKKKKKKKKK...",
      "..KCCCCCCCCCCK..",
      ".KCCCCCCCCCCCCK.",
      "KCCKCKCCCCKCCCCK",
      "KCKKKKCCCCCKCCCK",
      "KCCKCKCCCCRCCCCK",
      "KCCCCCCCCCMCCCCK",
      "KCCCCCCCCCCCCCCK",
      ".KCCKKKKKKKKCCK.",
      ".KKK........KKK.",
      "................",
      "................",
      "................",
      "................",
    ],
  ],
  palette: { K: OUTLINE, C: "#5a6b9c", R: "#ff4d8d", M: "#35d6f5" },
  cycle: 1.6,
};
