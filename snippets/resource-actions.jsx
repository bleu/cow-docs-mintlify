const CopyIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="14"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="14"
  >
    <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
)

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="14"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="14"
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="14"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="14"
  >
    <path d="M14 5h5v5" />
    <path d="M10 14 19 5" />
    <path d="M19 14v5H5V5h5" />
  </svg>
)

export const InlineResource = ({
  value,
  copyValue,
  href,
  chain,
  explorerHref,
  explorerType = "address",
  explorerSuffix = "",
  showCopy = true,
  showExplorer = false,
  openInNewTab,
}) => {
  const explorerBases = {
    arbitrum: "https://arbiscan.io",
    arbitrum_one: "https://arbiscan.io",
    avalanche: "https://snowscan.xyz",
    base: "https://basescan.org",
    bnb: "https://bscscan.com",
    ethereum: "https://etherscan.io",
    gnosis: "https://gnosisscan.io",
    ink: "https://explorer.inkonchain.com",
    linea: "https://lineascan.build",
    mainnet: "https://etherscan.io",
    optimism: "https://optimistic.etherscan.io",
    plasma: "https://plasmascan.to",
    polygon: "https://polygonscan.com",
    sepolia: "https://sepolia.etherscan.io",
    xdai: "https://gnosisscan.io",
  }

  const isExternalUrl = (candidate = "") => /^https?:\/\//i.test(candidate)
  const isHexAddress = (candidate = "") => /^0x[a-fA-F0-9]{40}$/.test(candidate)

  const normalizeUrl = (candidate = "") => {
    if (!candidate) {
      return ""
    }

    if (
      candidate.startsWith("/") ||
      candidate.startsWith("#") ||
      isExternalUrl(candidate)
    ) {
      return candidate
    }

    return `https://${candidate}`
  }

  const compactUrl = (candidate = "") => {
    const withoutProtocol = candidate.replace(/^https?:\/\//i, "")

    if (withoutProtocol.length <= 40) {
      return withoutProtocol
    }

    const [host, ...segments] = withoutProtocol.split("/")

    if (!segments.length) {
      return `${withoutProtocol.slice(0, 20)}...${withoutProtocol.slice(-12)}`
    }

    const tail =
      segments.length >= 2
        ? `${segments[segments.length - 2]}/${segments[segments.length - 1]}`
        : segments[segments.length - 1]

    return `${host}/.../${tail}`
  }

  const resolvedExplorerHref = (() => {
    if (explorerHref) {
      return explorerHref
    }

    if (!chain || !value) {
      return ""
    }

    const base = explorerBases[chain]

    if (!base) {
      return ""
    }

    return `${base}/${explorerType}/${value}${explorerSuffix}`
  })()

  const resolvedHref = normalizeUrl(href || "")
  const primaryHref = resolvedHref || (showExplorer ? resolvedExplorerHref : "")
  const primaryTarget =
    openInNewTab ?? (primaryHref ? isExternalUrl(primaryHref) : false)

  const shouldCompactValue = isExternalUrl(value || "") || isExternalUrl(primaryHref)
  const displayValue = shouldCompactValue ? compactUrl(value) : value
  const contentClassName = [
    "inline-resource__value",
    shouldCompactValue ? "inline-resource__value--compact" : "",
    isHexAddress(value || "") ? "inline-resource__value--address" : "",
  ]
    .filter(Boolean)
    .join(" ")

  const setButtonState = (button, state, label) => {
    if (!button) {
      return
    }

    button.dataset.state = state
    button.setAttribute("aria-label", label)
    button.title = label

    if (button.__copyTimer) {
      window.clearTimeout(button.__copyTimer)
      button.__copyTimer = null
    }

    if (state === "idle") {
      return
    }

    button.__copyTimer = window.setTimeout(() => {
      button.dataset.state = "idle"
      button.setAttribute("aria-label", "Copy value")
      button.title = "Copy value"
    }, 1200)
  }

  const fallbackCopy = (text) => {
    if (typeof document === "undefined") {
      return false
    }

    const input = document.createElement("textarea")
    input.value = text
    input.setAttribute("readonly", "")
    input.style.left = "-9999px"
    input.style.position = "absolute"
    document.body.appendChild(input)
    input.select()

    let copied = false

    try {
      copied = document.execCommand("copy")
    } catch {
      copied = false
    }

    document.body.removeChild(input)
    return copied
  }

  const copyText = async (text, button) => {
    if (!text) {
      setButtonState(button, "copied", "Nothing to copy")
      return
    }

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
        setButtonState(button, "copied", "Copied")
        return
      }
    } catch {
      // Fall back to execCommand copy.
    }

    const copied = fallbackCopy(text)
    setButtonState(button, copied ? "copied" : "idle", copied ? "Copied" : "Copy failed")
  }

  const content = (
    <code className={contentClassName} title={value}>
      {displayValue}
    </code>
  )

  return (
    <span className="inline-resource">
      {primaryHref ? (
        <a
          className="inline-resource__link"
          href={primaryHref}
          rel={primaryTarget ? "noreferrer noopener" : undefined}
          target={primaryTarget ? "_blank" : undefined}
          title={value}
        >
          {content}
        </a>
      ) : (
        content
      )}

      {(showCopy || (showExplorer && resolvedExplorerHref && resolvedExplorerHref !== primaryHref)) ? (
        <span className="inline-resource__actions">
          {showCopy ? (
            <button
              aria-label="Copy value"
              className="inline-resource__action"
              data-state="idle"
              onClick={(event) => copyText(copyValue || value, event.currentTarget)}
              title="Copy value"
              type="button"
            >
              <span className="inline-resource__icon inline-resource__icon--copy">
                <CopyIcon />
              </span>
              <span className="inline-resource__icon inline-resource__icon--check">
                <CheckIcon />
              </span>
            </button>
          ) : null}

          {showExplorer && resolvedExplorerHref && resolvedExplorerHref !== primaryHref ? (
            <a
              aria-label="Open in explorer"
              className="inline-resource__action"
              href={resolvedExplorerHref}
              rel="noreferrer noopener"
              target="_blank"
              title="Open in explorer"
            >
              <span className="inline-resource__icon">
                <ExternalLinkIcon />
              </span>
            </a>
          ) : null}
        </span>
      ) : null}
    </span>
  )
}
