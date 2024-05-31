export type Theme = {
  gradientLeft: string
  gradientRight: string
}

export const themeStyles = {
  theme1: { yellow: '#FFF7AD', pink: '#FFA9F9' },
  theme2: { blue: '#94B9FF', green: '#CDFFD8' },
  theme3: { purple: '#B6AFFF', lightPink: '#FFD3DC' },
  theme4: { grey: '#A6A6A6', white: '#fff' }
}

export const yellowPinkTheme: Theme = {
  gradientLeft: themeStyles.theme1.yellow,
  gradientRight: themeStyles.theme1.pink
}

export const blueGreenTheme: Theme = {
  gradientLeft: themeStyles.theme2.green,
  gradientRight: themeStyles.theme2.blue
}

export const purplePinkTheme: Theme = {
  gradientLeft: themeStyles.theme3.purple,
  gradientRight: themeStyles.theme3.lightPink
}

export const greyWhiteTheme: Theme = {
  gradientLeft: themeStyles.theme4.grey,
  gradientRight: themeStyles.theme4.white
}
