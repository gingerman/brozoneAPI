const episodes0 = {
    Shows: [
      `{"streamURL":"Episode 101: the orbzone- comprehensive guide to california's ballot propostions 2022  11-6-22"}`,
      '{"streamURL":"Episode 100: the orbzone- the Orbzone/Phonographic Materials Pre-Halloween Countdown Spooktackular Ghostravaganza 6000  10-30-22"}',
      `{"streamURL":"Episode 99: the orbzone- fuck 12, part 104 (the people's convoy, part 9 (convoy-downfall edition))  10-16-22"}`,
      `{"streamURL":"Episode 98: the orbzone- fuck 12, part 103 (the people's convoy, part 8)  10-2-22"}`,
      `{"streamURL":"Episode 97: the orbzone- fuck 12, part 102 (the people's convoy, part 7)  9-25-22"}`,
      `{"streamURL":"Episode 96: the orbzone- fuck 12, part 101 (People's Convoy, part 6 (trucker suicide-prevention edition))  9-4-22"}`,
      `{"streamURL":"Episode 95: the orbzone- fuck 12, part 100 (People's Convoy, part 5)  8-21-22"}`,
      `{"streamURL":"Episode 94: the orbzone- fuck 12, part 99 (People's Convoy, part 4)  8-14-22"}`,
      `{"streamURL":"Episode 93: the orbzone- fuck 12, part 98 (People's Convoy, part 3 (and a bit of LIVE coverage of the 1776RM Streamer Wars in Washington, DC)  8-7-22"}`,
      `{"streamURL":"Episode 92: the orbzone- fuck 12, pt 97 (People's Convoy edition, part 2)  7-24-22"}`,
      `{"streamURL":"Episode 91: the orbzone- truck (fuck) 12, pt 96 (focus on The People's Convoy)  7-17-22"}`,
      '{"streamURL":"Episode 90: the orbzone- fuck 12, pt 95 (focus on Ohio (Akron, Columbus, Logan))  7-10-22"}',
      '{"streamURL":"Episode 89: the orbzone- fuck 12, pt 94 (LIVE coverage of Jayland Walker protest in Akron, OH)  7-3-22"}',
      '{"streamURL":"Episode 88: the orbzone- fuck 12, pt 93 (focus on Ottawa (Freedom Convoy 2022), part 16)  6-26-22"}',
      '{"streamURL":"Episode 87: the orbzone- fuck 12, pt 92 (focus on Ottawa (Freedom Convoy 2022), part 15)  6-19-22"}',
      '{"streamURL":"Episode 86: the orbzone- fuck 12, pt 91 (focus on Ottawa, part 14)  6-(fuck)12-22"}',
      '{"streamURL":"Episode 85: the orbzone- fuck 12, pt 90 (focus on Uvalde, part 2 (BUFFALO EDITION))  6-5-22"}',
      '{"streamURL":"Episode 84: the orbzone- fuck 12, pt 89 (focus on Uvalde)  5-29-22"}',
      '{"streamURL":"Episode 83: the orbzone- fuck 12, pt 88 (focus on Ottawa, pt 13 (Rolling Thunder edition)  5-22-22"}',
      '{"streamURL":"Episode 82: the orbzone- fuck 12, pt 87 (focus on Ottawa (Freedom Convoy 2022), pt 11)  5-15-22"}',
      '{"streamURL":"Episode 81: the orbzone- fuck 12, pt 86 (focus on Ottawa (Freedom Convoy 2022), pt 10)  5-8-22"}',
      '{"streamURL":"Episode 80: the orbzone- fuck 12, pt 85 (focus on Ottawa (Freedom Convoy 2022), pt 9)  5-1-22 "}',
      '{"streamURL":"Episode 79: the orbzone- fuck 12, pt 84 (focus on Ottawa (Freedom Convoy 2022), pt 8)  4-10-22"}',
      '{"streamURL":"Episode 78: the orbzone- fuck 12, pt 83 (focus on Ottawa (Freedom Convoy 2022), pt 7)  4-3-22"}',
      '{"streamURL":"Episode 77: the orbzone- fuck 12, pt 82 (focus on Ottawa (Freedom Convoy 2022), pt 6 (and Moscow))  3-27-22"}',
      '{"streamURL":"Episode 76: the orbzone- fuck 12, pt 81 (focus on Ottawa (Freedom Convoy 2022), pt 5)  3-20-22"}',
      `{"streamURL":"Episode 75: the orbzone- fuck 12, pt 80 (focus on Ottawa (Freedom Convoy 2022 protests), pt 4 (with a tiny amount of LIVE coverage of The People's Convoy in Hagerstown, MD))  3-13-22"}`,
      `{"streamURL":"Episode 74: the orbzone- fuck 12, pt 79 (LIVE coverage of The People's Convoy in Hagerstown, MD)  3-6-22"}`,
      '{"streamURL":"Episode 73: the orbzone- fuck 12, pt 78 (focus on Ottawa, part 3)  2-27-22"}',
      '{"streamURL":"Episode 72: the orbzone- fuck 12, pt 77 (focus on Ottawa (#FreedomConvoy2022), part 2)  2-20-22"}',
      '{"streamURL":"Episode 71: the orbzone- fuck 12, pt 76 (#FreedomConvoy2022 Canada edition, part 1 (and LIVE coverage of L.A. superbowl riots)  2-13-22"}',
      '{"streamURL":"Episode 70: the orbzone- fuck 12, part 75 (focus on San Francisco and San Jose)  1-30-22"}',
      '{"streamURL":"Episode 69: the orbzone- fuck 12, part 74 (focus on Oakland)  1-23-22"}',
      '{"streamURL":"Episode 68: the orbzone- fuck 12, part 73 (focus on Seattle, part 8)  1-16-22"}',
      '{"streamURL":"Episode 67: the orbzone- fuck 12, part 72 (focus on Seattle, part 7)  1-9-22"}',
      '{"streamURL":"Episode 66: the orbzone- the sound of silence (DEAD AIR, part 2)  1-2-22"}',
      '{"streamURL":"Episode 65: the orbzone- the 16th annual war on x-mas (sneak attack #2) (new testiment, part 18)  12-26-21"}',
      '{"streamURL":"Episode 64: the orbzone- fuck 12, part 71 (focus on Seattle, part 6)  12-19-21"}',
      '{"streamURL":"Episode 63: the orbzone- fuck 12, part 70 (focus on Seattle, part 5)  12-12-21"}',
      '{"streamURL":"Episode 62: the orbzone- fuck 12, part 69 (dude) (focus on Seattle, part 4)  12-06-21"}',
      '{"streamURL":"Episode 61: the orbzone- fuck 12, part 68 (focus on Seattle, part 3)  11-28-21"}',
      '{"streamURL":"Episode 60: the orbzone- fuck 12, part 67 (focus on Seattle, part 2)  11-21-21"}',
      '{"streamURL":"Episode 59: the orbzone- fuck 12, part 66 (focus on Seattle, part 1)  11-14-21"}',
      '{"streamURL":"Episode 58: the orbzone- orbs, part 3 (ORB DANCE PARTY!!!)  11-7-21"}',
      '{"streamURL":"Episode 57: the orbzone- SCARY SHIT (part 2)  10-31-21"}',
      '{"streamURL":"Episode 56: the orbzone- fuck 12, part 65 (focus on Sacramento, part 2 (and Vallejo))  10-24-21"}',
      '{"streamURL":"Episode 55: the orbzone- fuck 12, part 64 (focus on Sacramento)  10-17-21"}',
      '{"streamURL":"Episode 54: the orbzone- fuck 12, part 63 (focus on Louisville, part 2)  10-10-21"}',
      '{"streamURL":"Episode 53: the orbzone- fuck 12, part 62 (focus on Louisville)  10-3-21"}'
    ]
  }


const episodes1 = {
    Shows: [
      {
        streamURL: "Episode 101: the orbzone- comprehensive guide to california's ballot propostions 2022  11-6-22"
      },
      {
        streamURL: 'Episode 100: the orbzone- the Orbzone/Phonographic Materials Pre-Halloween Countdown Spooktackular Ghostravaganza 6000  10-30-22'
      },
      {
        streamURL: "Episode 99: the orbzone- fuck 12, part 104 (the people's convoy, part 9 (convoy-downfall edition))  10-16-22"
      },
      {
        streamURL: "Episode 98: the orbzone- fuck 12, part 103 (the people's convoy, part 8)  10-2-22"
      },
      {
        streamURL: "Episode 97: the orbzone- fuck 12, part 102 (the people's convoy, part 7)  9-25-22"
      },
      {
        streamURL: "Episode 96: the orbzone- fuck 12, part 101 (People's Convoy, part 6 (trucker suicide-prevention edition))  9-4-22"
      },
      {
        streamURL: "Episode 95: the orbzone- fuck 12, part 100 (People's Convoy, part 5)  8-21-22"
      },
      {
        streamURL: "Episode 94: the orbzone- fuck 12, part 99 (People's Convoy, part 4)  8-14-22"
      },
      {
        streamURL: "Episode 93: the orbzone- fuck 12, part 98 (People's Convoy, part 3 (and a bit of LIVE coverage of the 1776RM Streamer Wars in Washington, DC)  8-7-22"
      },
      {
        streamURL: "Episode 92: the orbzone- fuck 12, pt 97 (People's Convoy edition, part 2)  7-24-22"
      },
      {
        streamURL: "Episode 91: the orbzone- truck (fuck) 12, pt 96 (focus on The People's Convoy)  7-17-22"
      },
      {
        streamURL: 'Episode 90: the orbzone- fuck 12, pt 95 (focus on Ohio (Akron, Columbus, Logan))  7-10-22'
      },
      {
        streamURL: 'Episode 89: the orbzone- fuck 12, pt 94 (LIVE coverage of Jayland Walker protest in Akron, OH)  7-3-22'
      },
      {
        streamURL: 'Episode 88: the orbzone- fuck 12, pt 93 (focus on Ottawa (Freedom Convoy 2022), part 16)  6-26-22'
      },
      {
        streamURL: 'Episode 87: the orbzone- fuck 12, pt 92 (focus on Ottawa (Freedom Convoy 2022), part 15)  6-19-22'
      },
      {
        streamURL: 'Episode 86: the orbzone- fuck 12, pt 91 (focus on Ottawa, part 14)  6-(fuck)12-22'
      },
      {
        streamURL: 'Episode 85: the orbzone- fuck 12, pt 90 (focus on Uvalde, part 2 (BUFFALO EDITION))  6-5-22'
      },
      {
        streamURL: 'Episode 84: the orbzone- fuck 12, pt 89 (focus on Uvalde)  5-29-22'
      },
      {
        streamURL: 'Episode 83: the orbzone- fuck 12, pt 88 (focus on Ottawa, pt 13 (Rolling Thunder edition)  5-22-22'
      },
      {
        streamURL: 'Episode 82: the orbzone- fuck 12, pt 87 (focus on Ottawa (Freedom Convoy 2022), pt 11)  5-15-22'
      },
      {
        streamURL: 'Episode 81: the orbzone- fuck 12, pt 86 (focus on Ottawa (Freedom Convoy 2022), pt 10)  5-8-22'
      },
      {
        streamURL: 'Episode 80: the orbzone- fuck 12, pt 85 (focus on Ottawa (Freedom Convoy 2022), pt 9)  5-1-22 '
      },
      {
        streamURL: 'Episode 79: the orbzone- fuck 12, pt 84 (focus on Ottawa (Freedom Convoy 2022), pt 8)  4-10-22'
      },
      {
        streamURL: 'Episode 78: the orbzone- fuck 12, pt 83 (focus on Ottawa (Freedom Convoy 2022), pt 7)  4-3-22'
      },
      {
        streamURL: 'Episode 77: the orbzone- fuck 12, pt 82 (focus on Ottawa (Freedom Convoy 2022), pt 6 (and Moscow))  3-27-22'
      },
      {
        streamURL: 'Episode 76: the orbzone- fuck 12, pt 81 (focus on Ottawa (Freedom Convoy 2022), pt 5)  3-20-22'
      },
      {
        streamURL: "Episode 75: the orbzone- fuck 12, pt 80 (focus on Ottawa (Freedom Convoy 2022 protests), pt 4 (with a tiny amount of LIVE coverage of The People's Convoy in Hagerstown, MD))  3-13-22"
      },
      {
        streamURL: "Episode 74: the orbzone- fuck 12, pt 79 (LIVE coverage of The People's Convoy in Hagerstown, MD)  3-6-22"
      },
      {
        streamURL: 'Episode 73: the orbzone- fuck 12, pt 78 (focus on Ottawa, part 3)  2-27-22'
      },
      {
        streamURL: 'Episode 72: the orbzone- fuck 12, pt 77 (focus on Ottawa (#FreedomConvoy2022), part 2)  2-20-22'
      },
      {
        streamURL: 'Episode 71: the orbzone- fuck 12, pt 76 (#FreedomConvoy2022 Canada edition, part 1 (and LIVE coverage of L.A. superbowl riots)  2-13-22'
      },
      {
        streamURL: 'Episode 70: the orbzone- fuck 12, part 75 (focus on San Francisco and San Jose)  1-30-22'
      },
      {
        streamURL: 'Episode 69: the orbzone- fuck 12, part 74 (focus on Oakland)  1-23-22'
      },
      {
        streamURL: 'Episode 68: the orbzone- fuck 12, part 73 (focus on Seattle, part 8)  1-16-22'
      },
      {
        streamURL: 'Episode 67: the orbzone- fuck 12, part 72 (focus on Seattle, part 7)  1-9-22'
      },
      {
        streamURL: 'Episode 66: the orbzone- the sound of silence (DEAD AIR, part 2)  1-2-22'
      },
      {
        streamURL: 'Episode 65: the orbzone- the 16th annual war on x-mas (sneak attack #2) (new testiment, part 18)  12-26-21'
      },
      {
        streamURL: 'Episode 64: the orbzone- fuck 12, part 71 (focus on Seattle, part 6)  12-19-21'
      },
      {
        streamURL: 'Episode 63: the orbzone- fuck 12, part 70 (focus on Seattle, part 5)  12-12-21'
      },
      {
        streamURL: 'Episode 62: the orbzone- fuck 12, part 69 (dude) (focus on Seattle, part 4)  12-06-21'
      },
      {
        streamURL: 'Episode 61: the orbzone- fuck 12, part 68 (focus on Seattle, part 3)  11-28-21'
      },
      {
        streamURL: 'Episode 60: the orbzone- fuck 12, part 67 (focus on Seattle, part 2)  11-21-21'
      },
      {
        streamURL: 'Episode 59: the orbzone- fuck 12, part 66 (focus on Seattle, part 1)  11-14-21'
      },
      {
        streamURL: 'Episode 58: the orbzone- orbs, part 3 (ORB DANCE PARTY!!!)  11-7-21'
      },
      {
        streamURL: 'Episode 57: the orbzone- SCARY SHIT (part 2)  10-31-21'
      },
      {
        streamURL: 'Episode 56: the orbzone- fuck 12, part 65 (focus on Sacramento, part 2 (and Vallejo))  10-24-21'
      },
      {
        streamURL: 'Episode 55: the orbzone- fuck 12, part 64 (focus on Sacramento)  10-17-21'
      },
      {
        streamURL: 'Episode 54: the orbzone- fuck 12, part 63 (focus on Louisville, part 2)  10-10-21'
      },
      {
        streamURL: 'Episode 53: the orbzone- fuck 12, part 62 (focus on Louisville)  10-3-21'
      }
    ]
  }