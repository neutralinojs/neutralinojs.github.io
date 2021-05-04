/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useEffect, useState} from 'react';
import DocPaginator from '@theme/DocPaginator';
import DocVersionSuggestions from '@theme/DocVersionSuggestions';
import Seo from '@theme/Seo';
import LastUpdated from '@theme/LastUpdated';
import useTOCHighlight from '@theme/hooks/useTOCHighlight';
import EditThisPage from '@theme/EditThisPage';
import clsx from 'clsx';
import styles from './styles.module.css';
import {
  useActivePlugin,
  useVersions,
  useActiveVersion,
} from '@theme/hooks/useDocs';

const LINK_CLASS_NAME = 'table-of-contents__link';
const ACTIVE_LINK_CLASS_NAME = 'table-of-contents__link--active';
const TOP_OFFSET = 100;

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({
  toc,
  isChild,
}) {
  if (!toc.length) {
    return null;
  }
  return (
    <ul
      className={
        isChild ? '' : 'table-of-contents table-of-contents__left-border'
      }>
      {toc.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <Headings isChild toc={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function CustomTOC({toc}) {
  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
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
            data-ea-type="image">
          </div>
      </div>
      <Headings toc={toc} />
    </div>
  );
}

function DocItem(props) {
  const {content: DocContent} = props;
  const {
    metadata,
    frontMatter: {
      image,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
    },
  } = DocContent;
  const {
    description,
    title,
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
  } = metadata;
  const {pluginId} = useActivePlugin({
    failfast: true,
  });
  const versions = useVersions(pluginId);
  const version = useActiveVersion(pluginId); // If site is not versioned or only one version is included
  // we don't show the version badge
  // See https://github.com/facebook/docusaurus/issues/3362

  const showVersionBadge = versions.length > 1;
  return (
    <>
      <Seo
        {...{
          title,
          description,
          keywords,
          image,
        }}
      />

      <div className="row">
        <div
          className={clsx('col', {
            [styles.docItemCol]: !hideTableOfContents,
          })}>
          <DocVersionSuggestions />
          <div className={styles.docItemContainer}>
            <article>
              {showVersionBadge && (
                <div>
                  <span className="badge badge--secondary">
                    Version: {version.label}
                  </span>
                </div>
              )}
              {!hideTitle && (
                <header>
                  <h1 className={styles.docTitle}>{title}</h1>
                </header>
              )}
              <div className="markdown">
                <DocContent />
              </div>
            </article>
            {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
              <div className="margin-vert--xl">
                <div className="row">
                  <div className="col">
                    {editUrl && <EditThisPage editUrl={editUrl} />}
                  </div>
                  {(lastUpdatedAt || lastUpdatedBy) && (
                    <LastUpdated
                      lastUpdatedAt={lastUpdatedAt}
                      formattedLastUpdatedAt={formattedLastUpdatedAt}
                      lastUpdatedBy={lastUpdatedBy}
                    />
                  )}
                </div>
              </div>
            )}
            <div className="margin-vert--lg">
              <DocPaginator metadata={metadata} />
            </div>
          </div>
        </div>
        {!hideTableOfContents && DocContent.toc && (
          <div className="col col--3">
            <CustomTOC toc={DocContent.toc} />
          </div>
        )}
      </div>
    </>
  );
}

export default DocItem;
