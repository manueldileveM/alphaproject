export const fontFamily = {
  mainText: 'Inter, sans-serif'
}

export const colors = {
  background: '#0B0F14',
  backgroundDue: '#111821',
  header: '#080C11',
  card: '#151C24',
  cardHover: '#1B2530',
  text: '#F5F7FA',
  textSecondary: '#A7B0BC',
  primary: '#4F8CFF',
  accentHover: '#6BA1FF',
  border: '#25303C',
  success: '#35D07F'
}

export const colorsLight = {
  background: '#FAF7F2', // beige chiarissimo, super soft
  backgroundDue: '#FFFFFF', // bianco puro per sezioni
  header: '#FFFFFF', // header pulito e luminoso
  card: '#FFFFFF', // card chiara e minimal
  cardHover: '#F2ECE4', // beige leggero per hover (premium)
  textSecondary: '#7A6A55', // marrone/grigio moderno, tono medio
  text: '#3E2F1C',
  primary: '#A67C52',
  accentHover: '#8C6239', // marrone più scuro per hover (equivalente al blu scuro)
  border: '#E3D9CC', // beige/grigio chiaro per bordi
  success: '#4CAF50' // verde moderno (puoi cambiarlo se vuoi più “terra”)
}

export const brezzaOceanica = {
  background: '#F0FAFA', // azzurro chiarissimo, come la schiuma del mare
  backgroundDue: '#FFFFFF', // bianco luminoso per le sezioni
  header: '#FFFFFF', // header pulito, come la sabbia chiara
  card: '#FFFFFF', // card luminose e minimal
  cardHover: '#DDF4F1', // verde acqua delicato per hover
  textSecondary: '#527A80', // blu petrolio desaturato per testi secondari
  text: '#173B4D', // blu profondo, leggibile e raffinato
  primary: '#008C95', // turchese marino, colore principale
  accentHover: '#006B75', // turchese scuro per hover
  border: '#C8E3E3', // azzurro-grigio delicato per bordi
  success: '#3E9B79' // verde acqua naturale
}

export const themeColors = {
  background: 'var(--color-background)',
  backgroundDue: 'var(--color-background-due)',
  header: 'var(--color-header)',
  card: 'var(--color-card)',
  cardHover: 'var(--color-card-hover)',
  text: 'var(--color-text)',
  textSecondary: 'var(--color-text-secondary)',
  primary: 'var(--color-primary)',
  accentHover: 'var(--color-accent-hover)',
  border: 'var(--color-border)',
  success: 'var(--color-success)'
}

export const titolo = {
  fontSize: {
    xs: '40px',
    md: '50px'
  },
  lineHeight: 1.2,
  fontWeight: 700,
  color: themeColors.primary,
  fontFamily: fontFamily.mainText
}

export const sottotitolo = {
  fontSize: {
    xs: '20px',
    sm: '24px',
    md: '30px'
  },
  lineHeight: 1.3,
  fontWeight: 700,
  color: themeColors.text,
  fontFamily: fontFamily.mainText
}

export const paragrafo = {
  maxWidth: '650px',
  fontSize: {
    xs: '15px',
    sm: '16px',
    md: '17px'
  },
  lineHeight: {
    xs: 1.7,
    md: 1.75
  },
  fontFamily: fontFamily.mainText,
  color: themeColors.textSecondary
}

export const paragrafoStrong = {
  fontSize: {
    xs: '20px',
    md: '22px'
  },
  fontWeight: 700,
  color: themeColors.textSecondary
}
