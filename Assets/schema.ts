import type { BrickColour } from "$lib/brickColours" // actually works!?!

export type Config = {
	/**
	 * The name of your revival. Make sure it's something stupid.
	 *
	 * [**No good names. Absolutely none.**](https://youtube.com/watch?v=88KGJ-eh7FU&t=145)
	 */
	Name: string
	/**
	 * Your revival's domain name.
	 */
	Domain: string
	/**
	 * The URL of your database server.
	 */
	DatabaseURL: string
	/**
	 * The URL of your RCC proxy server. Requires a URL scheme.
	 */
	RCCServiceProxyURL: string
	/**
	 * The symbol for your revival's currency. Placed before the amount.
	 */
	CurrencySymbol: string

	/**
	 * The default body colours for avatar creation, given to each new user on registration.
	 *
	 * Each colour is a BrickColor ID.
	 */
	DefaultBodyColors: {
		/**
		 * The default head colour.
		 */
		Head: BrickColour
		/**
		 * The default left arm colour.
		 */
		LeftArm: BrickColour
		/**
		 * The default left leg colour.
		 */
		LeftLeg: BrickColour
		/**
		 * The default right arm colour.
		 */
		RightArm: BrickColour
		/**
		 * The default right leg colour.
		 */
		RightLeg: BrickColour
		/**
		 * The default torso colour.
		 */
		Torso: BrickColour
	}

	/**
	 * Configuration for logging done by Mercury Core.
	 */
	Logging: {
		/**
		 * Whether to log all incoming requests to dynamic pages.
		 */
		Requests: boolean
		/**
		 * Whether to format errors in a more readable way. This does not provide a full stack trace.
		 */
		FormattedErrors: boolean
		/**
		 * Whether to log the time of each request.
		 */
		Time: boolean
	}

	/**
	 * Configuration for custom branding and image file paths in the Assets directory.
	 */
	Branding: {
		/**
		 * Path to your revival's favicon in the Assets directory. May be in any browser-supported format.
		 */
		Favicon: string
		/**
		 * Path to your revival's logo icon in the Assets directory. May be in any browser-supported format.
		 */
		Icon: string
		/**
		 * A very short tagline for your revival. This is displayed in the footer and on the login and register pages.
		 *
		 * If set to an empty string, this does not display.
		 */
		Tagline: string
		/**
		 * Descriptions for your revival's features. These are displayed on the register page.
		 *
		 * Each description is a key-value pair, where the key is a feature's title and the value is its description.
		 */
		Descriptions: { [k: string]: string }
	}

	/**
	 * Configuration for the revival's available themes. The first theme in the array will be the default theme.
	 */
	Themes: {
		/**
		 * The name of the theme.
		 */
		Name: string
		/**
		 * Path to the theme's CSS file in the Assets directory.
		 */
		Path: string
	}[]
}
