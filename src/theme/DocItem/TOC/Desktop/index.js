import React, {useState, useEffect} from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useTOCHighlight } from "@docusaurus/theme-common/internal"

const LINK_CLASS_NAME = 'table-of-contents__link';
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active';
const TOP_OFFSET = 100;
const MAX_HEADING_LEVEL = 2;

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({
  toc,
  isChild,
}) {
  if (!toc) {
    return null;
  }
  return (
    <ul
      className={
        isChild ? '' : 'table-of-contents table-of-contents__left-border'
      }>
      {toc.map((heading) => {
        if(heading.level > MAX_HEADING_LEVEL) return null
        return (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={LINK_CLASS_NAME}
              // Developer provided the HTML, so assume it's safe.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: heading.value }}
            />
            <Headings isChild toc={heading.children} />
          </li>
        )
      })}
    </ul>
  );
}

function CustomTOC({ toc }) {
  useTOCHighlight({linkClassName: LINK_CLASS_NAME, linkActiveClassName: ACTIVE_LINK_CLASS_NAME, maxHeadingLevel: TOP_OFFSET, minHeadingLevel: 0});
  const [isInitialized, setIsInitialized] = useState(false);
  const [isEthABlocked, setIsEthABlocked] = useState(false)
  useEffect(() => {
    if (isInitialized) {
      return;
    }
    setIsInitialized(true);
    try {
      setIsEthABlocked(typeof ethicalads === 'undefined')
      ethicalads.load_placements()
    } catch (error) {
      setIsEthABlocked(false)
    }
  });
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar')}>
      <div>
        <div
          data-ea-publisher="neutralino"
          data-ea-type="image"
          id="neutralino-docs"
        >
        </div>
      </div>
      <Headings toc={toc} />
    </div>
  );
}

export default function DocItemTOCDesktop() {
  const {toc, frontMatter} = useDoc();
  return (
    <CustomTOC toc={toc}/>
  );
}
