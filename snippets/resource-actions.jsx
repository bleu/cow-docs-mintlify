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
    lens: "https://explorer.lens.xyz",
    linea: "https://lineascan.build",
    mainnet: "https://etherscan.io",
    optimism: "https://optimistic.etherscan.io",
    plasma: "https://plasmascan.to",
    polygon: "https://polygonscan.com",
    sepolia: "https://sepolia.etherscan.io",
    xdai: "https://gnosisscan.io",
  }

  const wrapperStyle = {
    alignItems: "center",
    columnGap: "0.35rem",
    display: "inline-flex",
    flexWrap: "wrap",
    maxWidth: "100%",
    rowGap: "0.25rem",
    verticalAlign: "middle",
  }

  const valueStyle = {
    display: "inline-block",
    lineHeight: 1.45,
    maxWidth: "100%",
    overflowWrap: "anywhere",
    verticalAlign: "middle",
    whiteSpace: "normal",
    wordBreak: "break-word",
  }

  const actionStyle = {
    alignItems: "center",
    background: "rgba(127, 127, 127, 0.08)",
    border: "1px solid rgba(127, 127, 127, 0.2)",
    borderRadius: "999px",
    color: "inherit",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "0.7rem",
    fontWeight: 600,
    lineHeight: 1,
    padding: "0.18rem 0.45rem",
    textDecoration: "none",
    whiteSpace: "nowrap",
  }

  const isExternalUrl = (candidate = "") => /^https?:\/\//i.test(candidate)

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

  const setButtonLabel = (button, nextLabel) => {
    if (!button) {
      return
    }

    const originalLabel = button.dataset.originalLabel || button.textContent
    button.dataset.originalLabel = originalLabel
    button.textContent = nextLabel

    if (button.__copyTimer) {
      window.clearTimeout(button.__copyTimer)
    }

    button.__copyTimer = window.setTimeout(() => {
      button.textContent = originalLabel
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
      setButtonLabel(button, "None")
      return
    }

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
        setButtonLabel(button, "Copied")
        return
      }
    } catch {
      // Fall back to execCommand copy.
    }

    setButtonLabel(button, fallbackCopy(text) ? "Copied" : "Failed")
  }

  const content = <code style={valueStyle}>{value}</code>

  return (
    <span style={wrapperStyle}>
      {primaryHref ? (
        <a
          href={primaryHref}
          rel={primaryTarget ? "noreferrer noopener" : undefined}
          style={{ color: "inherit", display: "inline-block", maxWidth: "100%" }}
          target={primaryTarget ? "_blank" : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}

      {showCopy ? (
        <button
          onClick={(event) => copyText(copyValue || value, event.currentTarget)}
          style={actionStyle}
          type="button"
        >
          Copy
        </button>
      ) : null}

      {showExplorer && resolvedExplorerHref && resolvedExplorerHref !== primaryHref ? (
        <a
          href={resolvedExplorerHref}
          rel="noreferrer noopener"
          style={actionStyle}
          target="_blank"
        >
          Scan
        </a>
      ) : null}
    </span>
  )
}
