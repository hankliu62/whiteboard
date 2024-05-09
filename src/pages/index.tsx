import dynamic from 'next/dynamic';

const Excalidraw = dynamic(async () => (await import('@excalidraw/excalidraw')).Excalidraw, {
  ssr: false,
});

const WelcomeScreen = dynamic(async () => (await import('@excalidraw/excalidraw')).WelcomeScreen, {
  ssr: false,
});

/**
 * 手绘风格白板
 *
 * @returns
 */
export default function Index() {
  return (
    <Excalidraw
      initialData={{
        elements: [],
        appState: { zenModeEnabled: false, viewBackgroundColor: '#fff' },
        scrollToContent: true,
        libraryItems: [],
      }}
      langCode="zh-CN"
    >
      <WelcomeScreen />
      {/* <CommandPalette
      customCommandPaletteItems={[
        {
          label: t("labels.liveCollaboration"),
          category: DEFAULT_CATEGORIES.app,
          keywords: [
            "team",
            "multiplayer",
            "share",
            "public",
            "session",
            "invite",
          ],
          icon: usersIcon,
          perform: () => {
            setShareDialogState({
              isOpen: true,
              type: "collaborationOnly",
            });
          },
        },
        {
          label: t("roomDialog.button_stopSession"),
          category: DEFAULT_CATEGORIES.app,
          predicate: () => !!collabAPI?.isCollaborating(),
          keywords: [
            "stop",
            "session",
            "end",
            "leave",
            "close",
            "exit",
            "collaboration",
          ],
          perform: () => {
            if (collabAPI) {
              collabAPI.stopCollaboration();
              if (!collabAPI.isCollaborating()) {
                setShareDialogState({ isOpen: false });
              }
            }
          },
        },
        {
          label: t("labels.share"),
          category: DEFAULT_CATEGORIES.app,
          predicate: true,
          icon: share,
          keywords: [
            "link",
            "shareable",
            "readonly",
            "export",
            "publish",
            "snapshot",
            "url",
            "collaborate",
            "invite",
          ],
          perform: async () => {
            setShareDialogState({ isOpen: true, type: "share" });
          },
        },
        {
          label: "GitHub",
          icon: GithubIcon,
          category: DEFAULT_CATEGORIES.links,
          predicate: true,
          keywords: [
            "issues",
            "bugs",
            "requests",
            "report",
            "features",
            "social",
            "community",
          ],
          perform: () => {
            window.open(
              "https://github.com/excalidraw/excalidraw",
              "_blank",
              "noopener noreferrer",
            );
          },
        },
        {
          label: t("labels.followUs"),
          icon: XBrandIcon,
          category: DEFAULT_CATEGORIES.links,
          predicate: true,
          keywords: ["twitter", "contact", "social", "community"],
          perform: () => {
            window.open(
              "https://x.com/excalidraw",
              "_blank",
              "noopener noreferrer",
            );
          },
        },
        {
          label: t("labels.discordChat"),
          category: DEFAULT_CATEGORIES.links,
          predicate: true,
          icon: DiscordIcon,
          keywords: [
            "chat",
            "talk",
            "contact",
            "bugs",
            "requests",
            "report",
            "feedback",
            "suggestions",
            "social",
            "community",
          ],
          perform: () => {
            window.open(
              "https://discord.gg/UexuTaE",
              "_blank",
              "noopener noreferrer",
            );
          },
        },
        {
          label: "YouTube",
          icon: youtubeIcon,
          category: DEFAULT_CATEGORIES.links,
          predicate: true,
          keywords: ["features", "tutorials", "howto", "help", "community"],
          perform: () => {
            window.open(
              "https://youtube.com/@excalidraw",
              "_blank",
              "noopener noreferrer",
            );
          },
        },
        ...(isExcalidrawPlusSignedUser
          ? [
              {
                ...ExcalidrawPlusAppCommand,
                label: "Sign in / Go to Excalidraw+",
              },
            ]
          : [ExcalidrawPlusCommand, ExcalidrawPlusAppCommand]),

        {
          label: t("overwriteConfirm.action.excalidrawPlus.button"),
          category: DEFAULT_CATEGORIES.export,
          icon: exportToPlus,
          predicate: true,
          keywords: ["plus", "export", "save", "backup"],
          perform: () => {
            if (excalidrawAPI) {
              exportToExcalidrawPlus(
                excalidrawAPI.getSceneElements(),
                excalidrawAPI.getAppState(),
                excalidrawAPI.getFiles(),
                excalidrawAPI.getName(),
              );
            }
          },
        },
        {
          ...CommandPalette.defaultItems.toggleTheme,
          perform: () => {
            setAppTheme(
              editorTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK,
            );
          },
        },
      ]}
    /> */}
    </Excalidraw>
  );
}
