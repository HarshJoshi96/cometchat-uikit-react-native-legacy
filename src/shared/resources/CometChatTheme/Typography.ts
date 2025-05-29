
import { FontStyle } from "../../../shared/base";

/**
 *
 * Typography is a class containing default styles of text with diffrent titles.
 * This class returns JSON objects of text styles
 * This class also contains the setter methods for the styles.
 *
 * @version 1.0.0
 * @author CometChat
 *
 * @param {String} fontFamily
 * @param {String} fontWeightRegular
 * @param {String} fontWeightMedium
 * @param {String} fontWeightSemibold
 * @param {String} fontWeightBold
 * @param {Object} heading
 * @param {Object} name
 * @param {Object} title1
 * @param {Object} title2
 * @param {Object} subtitle1
 * @param {Object} subtitle2
 * @param {Object} text1
 * @param {Object} text2
 * @param {Object} caption1
 * @param {Object} caption2
 * @param {Object} caption3
 * @param {Object} body
 */

class Typography {
  fontFamily: any
  fontWeightRegular: string | "400"
  fontWeightMedium: string | "500"
  fontWeightSemibold: string | "600"
  fontWeightBold: string | "700"
  heading: FontStyle
  heading2: FontStyle
  heading3: FontStyle
  name: FontStyle
  title1: FontStyle
  title2: FontStyle
  subtitle1: FontStyle
  subtitle2: FontStyle
  subtitle3: FontStyle
  subtitle4: FontStyle
  subtitle5: FontStyle
  subtitle6: FontStyle
  text1: FontStyle
  text2: FontStyle
  caption1: FontStyle
  caption2: FontStyle
  caption3: FontStyle
  body: FontStyle
  constructor({
    fontFamily = undefined,
    fontWeightRegular = '400',
    fontWeightMedium = '500',
    fontWeightSemibold = '600',
    fontWeightBold = '700',

    heading = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightBold,
      fontSize: 20,
    }),

    heading2 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightBold,
      fontSize: 18,
    }),

    heading3 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightBold,
      fontSize: 16,
    }),

    name = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightMedium,
      fontSize: 14,
    }),

    title1 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 22,
    }),

    title2 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightSemibold,
      fontSize: 15,
    }),

    subtitle1 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 12,
    }),

    subtitle2 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 11,
    }),

    subtitle3 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 10,
    }),
    
    subtitle4 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 9,
    }),

    subtitle5 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 8,
    }),

    subtitle6 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 7,
    }),

    text1 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightMedium,
      fontSize: 13,
    }),

    text2 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightMedium,
      fontSize: 11,
    }),

    caption1 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightMedium,
      fontSize: 10,
    }),

    caption2 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightMedium,
      fontSize: 9,
    }),
    caption3 = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 7,
    }),
    body = new FontStyle({
      fontFamily: fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: 16,
    }),
  }: any) {
    this.fontFamily = fontFamily;
    this.fontWeightRegular = fontWeightRegular;
    this.fontWeightMedium = fontWeightMedium;
    this.fontWeightSemibold = fontWeightSemibold;
    this.fontWeightBold = fontWeightBold;
    this.heading = new FontStyle(heading);
    this.heading2 = new FontStyle(heading2);
    this.heading3 = new FontStyle(heading3);
    this.name = new FontStyle(name);
    this.title1 = new FontStyle(title1);
    this.title2 = new FontStyle(title2);
    this.subtitle1 = new FontStyle(subtitle1);
    this.subtitle2 = new FontStyle(subtitle2);
    this.subtitle2 = new FontStyle(subtitle2);
    this.subtitle3 = new FontStyle(subtitle3);
    this.subtitle4 = new FontStyle(subtitle4);
    this.subtitle5 = new FontStyle(subtitle5);
    this.subtitle6 = new FontStyle(subtitle6);
    this.text1 = new FontStyle(text1);
    this.text2 = new FontStyle(text2);
    this.caption1 = new FontStyle(caption1);
    this.caption2 = new FontStyle(caption2);
    this.caption3 = new FontStyle(caption3);
    this.body = new FontStyle(body);
  } 

  setFontFamily(fontFamily: any[]) {
    this.fontFamily = fontFamily.join(',');
  }

  setFontWeightRegular(fontWeightRegular: string) {
    this.fontWeightRegular = fontWeightRegular;
  }

  setFontWeightMedium(fontWeightMedium: string) {
    this.fontWeightMedium = fontWeightMedium;
  }

  setFontWeightSemibold(fontWeightSemibold: string) {
    this.fontWeightSemibold = fontWeightSemibold;
  }

  setFontWeightBold(fontWeightBold: string) {
    this.fontWeightBold = fontWeightBold;
  }

  setHeading(headingFont: any) {
    if (headingFont && headingFont.fontSize) {
      this.heading.fontSize = headingFont.fontSize;
    }

    if (headingFont && headingFont.fontWeight) {
      this.heading.fontWeight = headingFont.fontWeight;
    }
    if (headingFont && headingFont.fontFamily) {
      this.heading.fontFamily = headingFont.fontFamily;
    }
  }

  setHeading2(headingFont: any) {
    if (headingFont && headingFont.fontSize) {
      this.heading2.fontSize = headingFont.fontSize;
    }

    if (headingFont && headingFont.fontWeight) {
      this.heading2.fontWeight = headingFont.fontWeight;
    }
    if (headingFont && headingFont.fontFamily) {
      this.heading.fontFamily = headingFont.fontFamily;
    }
  }

  setHeading3(headingFont: any) {
    if (headingFont && headingFont.fontSize) {
      this.heading3.fontSize = headingFont.fontSize;
    }

    if (headingFont && headingFont.fontWeight) {
      this.heading3.fontWeight = headingFont.fontWeight;
    }
    if (headingFont && headingFont.fontFamily) {
      this.heading.fontFamily = headingFont.fontFamily;
    }
  }

  setName(nameFont: any) {
    if (nameFont && nameFont.fontSize) {
      this.name.fontSize = nameFont.fontSize;
    }

    if (nameFont && nameFont.fontWeight) {
      this.name.fontWeight = nameFont.fontWeight;
    }

    if (nameFont && nameFont.fontFamily) {
      this.name.fontFamily = nameFont.fontFamily;
    }
  }

  setTitle1(titleFont: any) {
    if (titleFont && titleFont.fontSize) {
      this.title1.fontSize = titleFont.fontSize;
    }

    if (titleFont && titleFont.fontWeight) {
      this.title1.fontWeight = titleFont.fontWeight;
    }

    if (titleFont && titleFont.fontFamily) {
      this.title1.fontFamily = titleFont.fontFamily;
    }
  }

  setTitle2(titleFont: any) {
    if (titleFont && titleFont.fontSize) {
      this.title2.fontSize = titleFont.fontSize;
    }

    if (titleFont && titleFont.fontWeight) {
      this.title2.fontWeight = titleFont.fontWeight;
    }

    if (titleFont && titleFont.fontFamily) {
      this.title2.fontFamily = titleFont.fontFamily;
    }
  }

  setSubtitle1(subtitleFont: any) {
    if (subtitleFont && subtitleFont.fontSize) {
      this.subtitle1.fontSize = subtitleFont.fontSize;
    }

    if (subtitleFont && subtitleFont.fontWeight) {
      this.subtitle1.fontWeight = subtitleFont.fontWeight;
    }

    if (subtitleFont && subtitleFont.fontFamily) {
      this.subtitle1.fontFamily = subtitleFont.fontFamily;
    }
  }

  setSubtitle2(subtitleFont: any) {
    if (subtitleFont && subtitleFont.fontSize) {
      this.subtitle2.fontSize = subtitleFont.fontSize;
    }

    if (subtitleFont && subtitleFont.fontWeight) {
      this.subtitle2.fontWeight = subtitleFont.fontWeight;
    }
    if (subtitleFont && subtitleFont.fontFamily) {
      this.subtitle2.fontFamily = subtitleFont.fontFamily;
    }
  }

  setSubtitle3(subtitleFont: any) {
    if (subtitleFont && subtitleFont.fontSize) {
      this.subtitle3.fontSize = subtitleFont.fontSize;
    }

    if (subtitleFont && subtitleFont.fontWeight) {
      this.subtitle3.fontWeight = subtitleFont.fontWeight;
    }

    if (subtitleFont && subtitleFont.fontFamily) {
      this.subtitle3.fontFamily = subtitleFont.fontFamily;
    }
  }

  setSubtitle4(subtitleFont: any) {
    if (subtitleFont && subtitleFont.fontSize) {
      this.subtitle4.fontSize = subtitleFont.fontSize;
    }

    if (subtitleFont && subtitleFont.fontWeight) {
      this.subtitle4.fontWeight = subtitleFont.fontWeight;
    }

    if (subtitleFont && subtitleFont.fontFamily) {
      this.subtitle4.fontFamily = subtitleFont.fontFamily;
    }
  }

  setSubtitle5(subtitleFont: any) {
    if (subtitleFont && subtitleFont.fontSize) {
      this.subtitle5.fontSize = subtitleFont.fontSize;
    }

    if (subtitleFont && subtitleFont.fontWeight) {
      this.subtitle5.fontWeight = subtitleFont.fontWeight;
    }
    if (subtitleFont && subtitleFont.fontFamily) {
      this.subtitle5.fontFamily = subtitleFont.fontFamily;
    }
  }

  setSubtitle6(subtitleFont: any) {
    if (subtitleFont && subtitleFont.fontSize) {
      this.subtitle6.fontSize = subtitleFont.fontSize;
    }

    if (subtitleFont && subtitleFont.fontWeight) {
      this.subtitle6.fontWeight = subtitleFont.fontWeight;
    }
    if (subtitleFont && subtitleFont.fontFamily) {
      this.subtitle6.fontFamily = subtitleFont.fontFamily;
    }
  }

  setText1(textFont: any) {
    if (textFont && textFont.fontSize) {
      this.text1.fontSize = textFont.fontSize;
    }

    if (textFont && textFont.fontWeight) {
      this.text1.fontWeight = textFont.fontWeight;
    }
  }

  setText2(textFont: any) {
    if (textFont && textFont.fontSize) {
      this.text2.fontSize = textFont.fontSize;
    }

    if (textFont && textFont.fontWeight) {
      this.text2.fontWeight = textFont.fontWeight;
    }
  }

  setCaption1(captionFont: any) {
    if (captionFont && captionFont.fontSize) {
      this.caption1.fontSize = captionFont.fontSize;
    }

    if (captionFont && captionFont.fontWeight) {
      this.caption1.fontWeight = captionFont.fontWeight;
    }

    if (captionFont && captionFont.fontFamily) {
      this.caption1.fontFamily = captionFont.fontFamily;
    }
  }

  setCaption2(captionFont: any) {
    if (captionFont && captionFont.fontSize) {
      this.caption2.fontSize = captionFont.fontSize;
    }

    if (captionFont && captionFont.fontWeight) {
      this.caption2.fontWeight = captionFont.fontWeight;
    }
    if (captionFont && captionFont.fontFamily) {
      this.caption2.fontFamily = captionFont.fontFamily;
    }
  }

  setCaption3(captionFont: any) {
    if (captionFont && captionFont.fontSize) {
      this.caption3.fontSize = captionFont.fontSize;
    }

    if (captionFont && captionFont.fontWeight) {
      this.caption3.fontWeight = captionFont.fontWeight;
    }
    if (captionFont && captionFont.fontFamily) {
      this.caption3.fontFamily = captionFont.fontFamily;
    }
  }

  setBody(bodyFont: any) {
    if (bodyFont && bodyFont.fontSize) {
      this.body.fontSize = bodyFont.fontSize;
    }

    if (bodyFont && bodyFont.fontWeight) {
      this.body.fontWeight = bodyFont.fontWeight;
    }
    if (bodyFont && bodyFont.fontFamily) {
      this.body.fontFamily = bodyFont.fontFamily;
    }
  }
}

export { Typography };
