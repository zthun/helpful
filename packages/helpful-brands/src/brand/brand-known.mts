import { isTagged, ZTag } from "@zthun/helpful-reflection";
import type { IZBrand } from "./brand.mjs";
import { ZBrandBuilder } from "./brand.mjs";

const KnownBrand = "known-brand";

/**
 * A list of all known brands.
 */
export abstract class ZBrandKnown {
  /**
   * Retrieves all known brands.
   *
   * @returns
   *        All known brands.
   */
  public static all(): IZBrand[] {
    const properties = Object.getOwnPropertyNames(ZBrandKnown);

    const brands = properties
      .filter((p) => isTagged(KnownBrand, ZBrandKnown, p))
      .map((p) => ZBrandKnown[p])
      .map((fn) => fn as () => IZBrand)
      .map((fn) => fn.call(null));

    return brands;
  }

  /**
   * Constructs the brand object for {@link https://www.airbnb.com/ | Airbnb}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static airbnb(): IZBrand {
    return new ZBrandBuilder()
      .id("airbnb")
      .name("Airbnb")
      .founded("2008-09-11")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.algolia.com/ | Algolia}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static algolia(): IZBrand {
    return new ZBrandBuilder()
      .id("algolia")
      .name("Algolia")
      .founded("2012-10-08")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.android.com/ | Android}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static android(): IZBrand {
    return new ZBrandBuilder()
      .id("android")
      .name("Android")
      .founded("2008-09-23")
      .owner("Google LLC")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.apple.com/ | Apple}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static apple(): IZBrand {
    return new ZBrandBuilder()
      .id("apple")
      .name("Apple")
      .founded("1976-04-01")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.cloudflare.com/ | Cloudflare}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static cloudflare(): IZBrand {
    return new ZBrandBuilder()
      .id("cloudflare")
      .name("Cloudflare")
      .founded("2010-09-27")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://codepen.io/ | CodePen}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static codepen(): IZBrand {
    return new ZBrandBuilder()
      .id("codepen")
      .name("CodePen")
      .founded("2013-03-15")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://discord.com/ | Discord}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static discord(): IZBrand {
    return new ZBrandBuilder()
      .id("discord")
      .name("Discord")
      .founded("2015-05-13")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.docker.com/| Docker}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static docker(): IZBrand {
    return new ZBrandBuilder()
      .id("docker")
      .name("Docker")
      .founded("2013-03-13")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.dropbox.com/ | Dropbox}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static dropbox(): IZBrand {
    return new ZBrandBuilder()
      .id("dropbox")
      .name("Dropbox")
      .founded("2008-09-11")
      .owner("Dropbox, Inc.")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.facebook.com/ | Facebook}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static facebook(): IZBrand {
    return new ZBrandBuilder()
      .id("facebook")
      .name("Facebook")
      .founded("2004-02-04")
      .owner("Meta Platforms")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.figma.com/ | Figma}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static figma(): IZBrand {
    return new ZBrandBuilder()
      .id("figma")
      .name("Figma")
      .founded("2016-09-27")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://github.com/ | GitHub}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static github(): IZBrand {
    return new ZBrandBuilder()
      .id("github")
      .name("GitHub")
      .founded("2008-02-08")
      .owner("Microsoft")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.google.com/ | Google}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static google(): IZBrand {
    return new ZBrandBuilder()
      .id("google")
      .name("Google")
      .founded("1998-09-04")
      .owner("Alphabet Inc")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.instagram.com/ | Instagram}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static instagram(): IZBrand {
    return new ZBrandBuilder()
      .id("instagram")
      .name("Instagram")
      .founded("2010-10-06")
      .owner("Meta Platforms")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.intercom.com/ | Intercom}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static intercom(): IZBrand {
    return new ZBrandBuilder()
      .id("intercom")
      .name("Intercom")
      .founded("2011-09-15")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.kickstarter.com/ | Kickstarter}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static kickstarter(): IZBrand {
    return new ZBrandBuilder()
      .id("kickstarter")
      .name("Kickstarter")
      .founded("2009-04-28")
      .owner("Prosus")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://line.me | Line}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static line(): IZBrand {
    return new ZBrandBuilder()
      .id("line")
      .name("Line")
      .founded("2011-06-23")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.linkedin.com/ | LinkedIn}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static linkedin(): IZBrand {
    return new ZBrandBuilder()
      .id("linkedin")
      .name("LinkedIn")
      .founded("2003-05-05")
      .owner("Microsoft")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://medium.com/ | Medium}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static medium(): IZBrand {
    return new ZBrandBuilder()
      .id("medium")
      .name("Medium")
      .founded("2012-09-15")
      .owner("A Medium Corporation")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.paypal.com/ | PayPal}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static paypal(): IZBrand {
    return new ZBrandBuilder()
      .id("paypal")
      .name("PayPal")
      .founded("1999-09-30")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://slack.com/ | Slack}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static slack(): IZBrand {
    return new ZBrandBuilder()
      .id("slack")
      .name("Slack")
      .founded("2013-08-04")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.squarespace.com/ | Squarespace}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static squarespace(): IZBrand {
    return new ZBrandBuilder()
      .id("squarespace")
      .name("Squarespace")
      .founded("2004-01-21")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://stackoverflow.com/ | StackOverflow}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static stackOverflow(): IZBrand {
    return new ZBrandBuilder()
      .id("stack-overflow")
      .name("Stack Overflow")
      .founded("2008-09-15")
      .owner("Prosus")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://stripe.com/ | Stripe}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static stripe(): IZBrand {
    return new ZBrandBuilder()
      .id("stripe")
      .name("Stripe")
      .founded("2011-09-15")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.shopify.com/ | Shopify}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static shopify(): IZBrand {
    return new ZBrandBuilder()
      .id("shopify")
      .name("Shopify")
      .founded("2006-06-01")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.tiktok.com | TikTok}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static tiktok(): IZBrand {
    return new ZBrandBuilder()
      .id("tiktok")
      .name("TikTok")
      .founded("2016-09-20")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://twitter.com/ | Twitter (Now X)}
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static twitter(): IZBrand {
    return new ZBrandBuilder()
      .id("twitter")
      .name("Twitter")
      .founded("2006-03-21")
      .owner("X Corp.")
      .inactive()
      .build();
  }

  /**
   * Constructs the brand object for the {@link https://www.usps.com/ | United States Postal Service}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static usps(): IZBrand {
    return new ZBrandBuilder()
      .id("usps")
      .name("United States Postal Service")
      .founded("1971-07-01")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://vimeo.com/ | Vimeo}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static vimeo(): IZBrand {
    return new ZBrandBuilder()
      .id("vimeo")
      .name("Vimeo")
      .founded("2004-11-08")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.whatsapp.com/| WhatsApp}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static whatsapp(): IZBrand {
    return new ZBrandBuilder()
      .id("whatsapp")
      .name("WhatsApp")
      .founded("2009-02-24")
      .owner("Meta Platforms")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.microsoft.com/en-us/windows | Windows}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static windows(): IZBrand {
    return new ZBrandBuilder()
      .id("windows")
      .name("Windows")
      .founded("1985-11-20")
      .owner("Microsoft")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.wix.com/ | Wix}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static wix(): IZBrand {
    return new ZBrandBuilder()
      .id("wix")
      .name("Wix")
      .founded("2006-10-06")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://wordpress.com/ | WordPress}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static wordpress(): IZBrand {
    return new ZBrandBuilder()
      .id("wordpress")
      .name("WordPress")
      .founded("2003-05-27")
      .build();
  }

  /**
   * Constructs the brand object for {@link https://twitter.com/ | X (Formally Twitter)}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static x(): IZBrand {
    return new ZBrandBuilder()
      .id("x-twitter")
      .name("X")
      .founded("2023-07-24")
      .owner("X Corp.")
      .active()
      .build();
  }

  /**
   * Constructs the brand object for {@link https://www.youtube.com/ | YouTube}.
   *
   * @returns
   *        A reference to this object.
   */
  @ZTag(KnownBrand)
  public static youtube(): IZBrand {
    return new ZBrandBuilder()
      .id("youtube")
      .name("YouTube")
      .founded("2005-02-14")
      .owner("Google LLC")
      .build();
  }
}
