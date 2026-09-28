/**
 * Single source of truth for static image paths.
 * All paths live under /public/Admin_Resources and are percent-encoded
 * (spaces = %20) so they can be used directly in `src` attributes.
 */
export const ASSETS = {
  /** Blue "P" logo mark — 70x70, transparent background. */
  logoMark: "/Admin_Resources/Frame%2061.png",
  /** Hero photo: hand holding phone — 674x508. */
  heroPhoto: "/Admin_Resources/Frame%20104.png",
  /** Tilted lock-screen phone mockup — 556x742. */
  heroPhoneMock: "/Admin_Resources/Frame%2095.png",
  /** Circular user avatar — 104x104. */
  avatar1: "/Admin_Resources/Frame%2098.png",
  /** Circular user avatar — 104x104. */
  avatar2: "/Admin_Resources/Frame%2099.png",
  /** Finished founder card — 400x460; source for face #3 (crop via CSS object-position). */
  avatar3CardCrop: "/Admin_Resources/founders%20profile-8.png",
  /** Circular user avatar — 104x104. */
  avatar4: "/Admin_Resources/Frame%20101.png",
  /** Problem section illustration — 972x500. */
  problemIllustration: "/Admin_Resources/Frame%20114.png",
  /** Benefits section photo — 866x475. */
  benefitsPhoto: "/Admin_Resources/Frame%20121.png",
  /** Get-started founder photos — 416x544, 416x422, 416x688, 416x604, 416x508 (in order). */
  getStartedPhotos: [
    "/Admin_Resources/founders%20profile-3.png",
    "/Admin_Resources/founders%20profile-4.png",
    "/Admin_Resources/founders%20profile-5.png",
    "/Admin_Resources/founders%20profile-6.png",
    "/Admin_Resources/founders%20profile-7.png",
  ],
  /** Finished founder cards — 400x460 with baked-in name/role (in order). */
  founderCards: [
    "/Admin_Resources/founders%20profile.png",
    "/Admin_Resources/founders%20profile-1.png",
    "/Admin_Resources/founders%20profile-2.png",
  ],
  /** Blue double-quote mark — 100x100. */
  quoteMark: "/Admin_Resources/Frame%20138.png",
  /** Black up-right arrow icon — 20x20. */
  arrowUpRight: "/Admin_Resources/Frame%20124.png",
} as const;
