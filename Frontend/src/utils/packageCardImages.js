import { getAssetUrl } from './assets'

/** Card images on Product / Apply Now / Home wellness showcase */
const FILENAME_BY_PACKAGE_ID = {
  suswa: 'tawc_suswa.JPG',
  longonot: 'tawc_elgon.jpg',
  elgon: 'kenyan_sport_win.png',
  kenya: 'tawc_kenya.jpg',
  liaison: 'tawc_elgon.jpg',
}

export function getPackageCardImageUrl(planId) {
  const file = FILENAME_BY_PACKAGE_ID[planId] || 'tawc_elgon.jpg'
  return getAssetUrl(file)
}
