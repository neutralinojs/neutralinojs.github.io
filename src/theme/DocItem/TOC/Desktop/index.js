import React from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useTOCHighlight } from "@docusaurus/theme-common/internal";
import EthicalAds from '../../../../extra/EthicalAds';

const LINK_CLASS_NAME = 'table-of-contents__link';
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active';
const TOP_OFFSET = 100;
const MAX_HEADING_LEVEL = 3;

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({
  toc,
  isChild,
  frontMatter
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
        const LOCAL_MAX_HEADING_VALUE = frontMatter.toc_max_heading_level ? frontMatter.toc_max_heading_level : MAX_HEADING_LEVEL
        if(heading.level > LOCAL_MAX_HEADING_VALUE) return null
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

function CustomTOC({ toc, frontMatter }) {
  useTOCHighlight({linkClassName: LINK_CLASS_NAME, linkActiveClassName: ACTIVE_LINK_CLASS_NAME, maxHeadingLevel: TOP_OFFSET, minHeadingLevel: 0});
  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar')}>
      <EthicalAds id="docs" type="image"/>
      <Headings toc={toc} frontMatter={frontMatter}/>
    </div>
  );
}

export default function DocItemTOCDesktop() {
  const {toc, frontMatter} = useDoc();
  return (
    <CustomTOC toc={toc} frontMatter={frontMatter}/>
  );
}
