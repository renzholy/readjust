import { epub_type, renderToString, render_package } from './xhtml.js'

export const meta_inf_container = `<?xml version="1.0" encoding="UTF-8"?>
<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
   <rootfiles>
      <rootfile full-path="EPUB/package.opf" media-type="application/oebps-package+xml"/>
   </rootfiles>
</container>`

export const epub_package_opf = render_package({
  title: 'EPUB 3.0 Specification',
  creator: 'EPUB 3 Working Group',
  language: 'en',
  timestamp: new Date(),
})

export const epub_img_cover_image = await (
  await fetch(
    'https://raw.githubusercontent.com/IDPF/epub3-samples/main/30/epub30-spec/EPUB/img/epub_logo_color.jpg',
  )
).arrayBuffer()

export const example_toc = renderToString(
  <>
    <body>
      <head>
        <meta charSet="utf-8" />
        <title>EPUB 3 Specifications - Table of Contents</title>
        <link rel="stylesheet" type="text/css" href="../css/epub-spec.css" />
      </head>
      <nav {...epub_type('toc')} id="toc">
        <h1 className="title">Table of Contents</h1>
        <ol>
          <li id="ttl">
            <a href="epub30-titlepage.xhtml">EPUB 3.0 Specification</a>
          </li>
          <li id="nav">
            <a href="epub30-nav.xhtml">
              EPUB 3 Specifications - Table of Contents
            </a>
          </li>
          <li id="term">
            <a href="epub30-terminology.xhtml">Terminology</a>
          </li>
          <li id="ovw">
            <a href="epub30-overview.xhtml">EPUB 3 Overview</a>
            <ol>
              <li>
                <a href="epub30-overview.xhtml#sec-intro">1. Introduction</a>
                <ol>
                  <li>
                    <a href="epub30-overview.xhtml#sec-intro-overview">
                      1.1. Overview
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-intro-roadmap">
                      1.2. Roadmap
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-overview.xhtml#sec-features">2. Features</a>
                <ol>
                  <li>
                    <a href="epub30-overview.xhtml#sec-package-file">
                      2.1. Package Document
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-nav">2.2. Navigation</a>
                    <ol>
                      <li>
                        <a href="epub30-overview.xhtml#sec-nav-order">
                          2.2.1. Reading Order
                        </a>
                      </li>
                      <li>
                        <a href="epub30-overview.xhtml#sec-nav-nav-doc">
                          2.2.2. Navigation Document
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-linking">2.3. Linking</a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-metadata">
                      2.4. Metadata
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-content-docs">
                      2.5. Content Documents
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-rendering">
                      2.6. Rendering and CSS
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-multimedia">
                      2.7. Multimedia
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-fonts">2.8. Fonts</a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-scripting">
                      2.9. Scripting
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-tts">
                      2.10. Text-to-speech
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-container">
                      2.11. Container
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-overview.xhtml#sec-gls">
                  3. Global Language Support
                </a>
                <ol>
                  <li>
                    <a href="epub30-overview.xhtml#sec-gls-metadata">
                      3.1. Metadata
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-gls-content-docs">
                      3.2. Content Documents
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-gls-css">3.3. CSS</a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-gls-fonts">3.4. Fonts</a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-gls-tts">
                      3.5. Text-to-speech
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-gls-container">
                      3.6. Container
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-overview.xhtml#sec-accessibility">
                  4. Accessibility
                </a>
                <ol>
                  <li>
                    <a href="epub30-overview.xhtml#sec-access-nav">
                      4.1. Navigation
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-access-semantic-markup">
                      4.2. Semantic Markup
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-access-layout">
                      4.3. Dynamic Layouts
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-access-overlays">
                      4.4. Aural Renditions and Media Overlays
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-access-fallbacks">
                      4.5. Fallbacks
                    </a>
                  </li>
                  <li>
                    <a href="epub30-overview.xhtml#sec-access-scripting">
                      4.6. Scripting
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li id="pub">
            <a href="epub30-publications.xhtml">EPUB Publications 3.0</a>
            <ol>
              <li>
                <a href="epub30-publications.xhtml#sec-overview">1. Overview</a>
                <ol>
                  <li>
                    <a href="epub30-publications.xhtml#sec-overview-purpose-and-scope">
                      1.1. Purpose and Scope
                    </a>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-conformance">
                      1.3. Conformance Statements
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-publications.xhtml#sec-epub-conformance">
                  2. EPUB Publications
                </a>
                <ol>
                  <li>
                    <a href="epub30-publications.xhtml#sec-epub-content-conf">
                      2.1. Content Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-epub-rs-conf">
                      2.2. Reading System Conformance
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-publications.xhtml#sec-package-documents">
                  3. Package Documents
                </a>
                <ol>
                  <li>
                    <a href="epub30-publications.xhtml#sec-package-intro">
                      3.1. Introduction
                    </a>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-package-content-conf">
                      3.2. Content Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-package-rs-conf">
                      3.3. Reading System Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-package-def">
                      3.4. Package Document Definition
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-publications.xhtml#sec-package-elem">
                          3.4.1. The <code>package</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-metadata-elem">
                          3.4.2. The <code className="literal">metadata</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-opf-dcidentifier">
                          3.4.3. The DCMES <code>identifier</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-opf-dctitle">
                          3.4.4. The DCMES <code>title</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-opf-dclanguage">
                          3.4.5. The DCMES <code>language</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-opf-dcmes-optional">
                          3.4.6. The DCMES Optional Elements
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-meta-elem">
                          3.4.7. The <code className="literal">meta</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-opf-meta-elem">
                          3.4.8. The <code className="literal">meta</code>{' '}
                          Element (OPF2) [OBSOLETE]
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-link-elem">
                          3.4.9. The <code>link</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-manifest-elem">
                          3.4.10. The <code className="literal">manifest</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-item-elem">
                          3.4.11. The <code>item</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-spine-elem">
                          3.4.12. The <code>spine</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-itemref-elem">
                          3.4.13. The <code>itemref</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-guide-elem">
                          3.4.14. The <code>guide</code> Element [DEPRECATED]
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-bindings-elem">
                          3.4.15. The <code>bindings</code> Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-mediaType-elem">
                          3.4.16. The <code>mediaType</code> Element
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-publications.xhtml#sec-package-metadata">
                  4. Package Metadata
                </a>
                <ol>
                  <li>
                    <a href="epub30-publications.xhtml#sec-package-metadata-identifiers">
                      4.1. Publication Identifiers
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-publications.xhtml#sec-opf-metadata-identifiers-uid">
                          4.1.1. Unique Identifier
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-opf-metadata-identifiers-pid">
                          4.1.2. Package Identifier
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-metadata-assoc">
                      4.2. Vocabulary Association Mechanisms
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-publications.xhtml#sec-metadata-assoc-overview">
                          4.2.1. Overview
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-metadata-default-vocab">
                          4.2.2. Default Vocabulary
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-metadata-reserved-vocabs">
                          4.2.3. Reserved Vocabularies
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-prefix-attr">
                          4.2.4. The <code>prefix</code> Attribute
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-property-datatype">
                          4.2.5. The property Data Type
                        </a>
                        <ol>
                          <li>
                            <a href="epub30-publications.xhtml#sec-property-syntax">
                              4.2.5.1. Syntax
                            </a>
                          </li>
                          <li>
                            <a href="epub30-publications.xhtml#sec-property-processing">
                              4.2.5.2. Processing
                            </a>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-package-metadata-vocab">
                      4.3. Package Metadata Vocabulary
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-publications.xhtml#elemdef-opf-meta-overview">
                          4.3.1. Overview
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-meta-property-values">
                          4.3.2. Metadata <code>meta</code> Properties
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-link-rel-values">
                          4.3.3. Metadata <code>link</code> Properties
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-item-property-values">
                          4.3.4. Manifest <code>item</code> Properties
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-itemref-property-values">
                          4.3.5. Spine <code>itemref</code> Properties
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-publications.xhtml#sec-publication-resources">
                  5. Publication Resources
                </a>
                <ol>
                  <li>
                    <a href="epub30-publications.xhtml#sec-core-media-types">
                      5.1. Core Media Types
                    </a>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-fallback-processing-flow">
                      5.2. Restrictions and Fallbacks
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-publications.xhtml#sec-foreign-restrictions">
                          5.2.1. Foreign Resource Restrictions
                        </a>
                      </li>
                      <li>
                        <a href="epub30-publications.xhtml#sec-fallback-processing-flow-manifest">
                          5.2.2. Manifest Fallbacks
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-resource-locations">
                      5.3. Publication Resource Locations
                    </a>
                  </li>
                  <li>
                    <a href="epub30-publications.xhtml#sec-xml-constraints">
                      5.4. XML Conformance
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-publications.xhtml#app-package-schema">
                  A. Package Document Schema
                </a>
              </li>
              <li>
                <a href="epub30-publications.xhtml#app-media-type">
                  B. The <code>application/oebps-package+xml</code> Media Type
                </a>
              </li>
            </ol>
          </li>
          <li id="cd">
            <a href="epub30-contentdocs.xhtml">EPUB Content Documents 3.0</a>
            <ol>
              <li>
                <a href="epub30-contentdocs.xhtml#sec-overview">1. Overview</a>
                <ol>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-overview-purpose-and-scope">
                      1.1. Purpose and Scope
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-overview-relations">
                      1.2. Relationship to Other Specifications
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-overview-relations-html">
                          1.2.1. Relationship to HTML5
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-overview-relations-svg">
                          1.2.2. Relationship to SVG
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-overview-relations-css">
                          1.2.3. Relationship to CSS
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-overview-versioning">
                          1.2.4. EPUB 3 Versioning Strategy
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-conformance">
                      1.4. Conformance Statements
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-overview-nspfx">
                      1.5. Namespace prefix mappings
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-contentdocs.xhtml#sec-contentdocs">
                  2. EPUB Content Documents
                </a>
                <ol>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-xhtml">
                      2.1. XHTML Content Documents
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-xhtml-conf-content">
                          2.1.1. Content Conformance
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-xhtml-conf-rs">
                          2.1.2. Reading System Conformance
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-xhtml-additions">
                          2.1.3. HTML5 Extensions and Enhancements
                        </a>
                        <ol>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-semantic-inflection">
                              2.1.3.1. Semantic Inflection
                            </a>
                            <ol>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-semantic-inflection-intro">
                                  2.1.3.1.1. Introduction
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-content-type-attribute">
                                  2.1.3.1.2. The <code>epub:type</code>{' '}
                                  Attribute
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-contentdocs-vocab-association">
                                  2.1.3.1.3. Vocabulary Association
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-contentdocs-semantic-inflection-processing-reqs">
                                  2.1.3.1.4. Processing Requirements
                                </a>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-ssml-attrib">
                              2.1.3.2. SSML Attributes
                            </a>
                            <ol>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-cd-ssml-intro">
                                  2.1.3.2.1. Overview
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-cd-ssml-ph-attrib">
                                  2.1.3.2.2. The <code>ssml:ph</code> attribute
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-cd-ssml-alphabet-attrib">
                                  2.1.3.2.3. The <code>ssml:alphabet</code>{' '}
                                  attribute
                                </a>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-content-switch">
                              2.1.3.3. Content Switching
                            </a>
                            <ol>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-switch-intro">
                                  2.1.3.3.1. Introduction
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-switch-def">
                                  2.1.3.3.2. Definition
                                </a>
                                <ol>
                                  <li>
                                    <a href="epub30-contentdocs.xhtml#sec-xhtml-epub-switch">
                                      2.1.3.3.2.1. The <code>epub:switch</code>{' '}
                                      Element
                                    </a>
                                  </li>
                                  <li>
                                    <a href="epub30-contentdocs.xhtml#sec-xhtml-epub-case">
                                      2.1.3.3.2.2. The <code>epub:case</code>{' '}
                                      Element
                                    </a>
                                  </li>
                                  <li>
                                    <a href="epub30-contentdocs.xhtml#sec-xhtml-epub-default">
                                      2.1.3.3.2.3. The <code>epub:default</code>{' '}
                                      Element
                                    </a>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-switch-processing">
                                  2.1.3.3.3. Processing
                                </a>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-epub-trigger">
                              2.1.3.4. The <code>epub:trigger</code> Element
                            </a>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-alternate-style-tags">
                              2.1.3.5. Alternate Style Tags
                            </a>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-xhtml-deviations">
                          2.1.4. HTML5 Deviations and Constraints
                        </a>
                        <ol>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-mathml">
                              2.1.4.1. Embedded MathML
                            </a>
                            <ol>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-mathml-intro">
                                  2.1.4.1.1. Introduction
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-mathml-conf-content">
                                  2.1.4.1.2. Content Conformance
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-mathml-rs-conf">
                                  2.1.4.1.3. Reading System Conformance
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-mathml-alt">
                                  2.1.4.1.4. Alternative Content
                                </a>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-svg">
                              2.1.4.2. Embedded SVG
                            </a>
                            <ol>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-svg-css">
                                  2.1.4.2.1. Embedded SVG and CSS
                                </a>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-deviations-unicode">
                              2.1.4.3. Unicode Restrictions
                            </a>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-deviations-discouraged">
                              2.1.4.4. Discouraged Constructs
                            </a>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-xhtml-nav">
                      2.2. EPUB Navigation Documents
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-intro">
                          2.2.1. Introduction
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-content-conf">
                          2.2.2. Content Conformance
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-rs-conf">
                          2.2.3. Reading System Conformance
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-def">
                          2.2.4. EPUB Navigation Document Definition
                        </a>
                        <ol>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-def-model">
                              2.2.4.1. The <code>nav</code> Element:
                              Restrictions
                            </a>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-def-types">
                              2.2.4.2. The <code>nav</code> Element: Types
                            </a>
                            <ol>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-def-types-toc">
                                  2.2.4.2.1. The <code>nav</code> Element
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-def-types-pagelist">
                                  2.2.4.2.2. The <code>nav</code> Element
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-def-types-landmarks">
                                  2.2.4.2.3. The <code>nav</code> Element
                                </a>
                              </li>
                              <li>
                                <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-def-types-other">
                                  2.2.4.2.4. Other <code>nav</code> Elements
                                </a>
                              </li>
                            </ol>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#sec-xhtml-nav-def-hidden">
                              2.2.4.3. The <code>hidden</code> attribute
                            </a>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-svg">
                      2.3. SVG Content Documents
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-svg-intro">
                          2.3.1. Introduction
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-svg-content-conf">
                          2.3.2. Content Conformance
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-svg-restrictions">
                          2.3.3. Restrictions on SVG 1.1
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-svg-rs-conf">
                          2.3.4. Reading System Conformance
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-scripted-content">
                      2.4. Scripted Content Documents
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-scripted-context">
                          2.4.1. Scripting Contexts
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-scripted-content-content-reqs">
                          2.4.2. Content Conformance
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-scripted-content-rs-reqs">
                          2.4.3. Reading System Conformance
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-scripted-content-security">
                          2.4.4. Security Considerations
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-scripted-content-events">
                          2.4.5. Event Model Considerations
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-contentdocs.xhtml#sec-css">
                  3. EPUB Style Sheets
                </a>
                <ol>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-css-content-conf">
                      3.1. Content Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-css-rs-conf">
                      3.2. Reading System Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-css-profile">
                      3.3. EPUB 3 CSS Profile
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-2.1">
                          3.3.1. CSS 2.1
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-2.0-list-style-type">
                          3.3.2. CSS 2.0
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-voice-characteristics">
                          3.3.3. CSS 3.0 Speech
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-fonts">
                          3.3.4. CSS Fonts Level 3
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-text">
                          3.3.5. CSS Text Level 3
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-writing-modes">
                          3.3.6. CSS Writing Modes
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-media-queries">
                          3.3.7. Media Queries
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-namespaces">
                          3.3.8. CSS Namespaces
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-multi-column">
                          3.3.9. CSS Multi-Column Layout
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-ruby-position">
                          3.3.10. Ruby Positioning
                        </a>
                      </li>
                      <li>
                        <a href="epub30-contentdocs.xhtml#sec-css-oeb-head-foot">
                          3.3.11. Display Property Values{' '}
                          <code>oeb-page-head</code> and{' '}
                          <code>oeb-page-foot</code>
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-contentdocs.xhtml#sec-pls">4. PLS Documents</a>
                <ol>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-pls-overview">
                      4.1. Overview
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-pls-conf-pub">
                      4.2. EPUB Publication Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-pls-conf-content">
                      4.3. Content Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#sec-pls-conf-rs">
                      4.4. Reading System Conformance
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-contentdocs.xhtml#app-schemas">A. Schemas</a>
                <ol>
                  <li>
                    <a href="epub30-contentdocs.xhtml#app-xhtml-schema">
                      A.1. XHTML Content Document Schema
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#app-xhtml-nav-schema">
                      A.2. EPUB Navigation Document Schema
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#app-svg-schema">
                      A.3. SVG Content Document Schema
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-contentdocs.xhtml#app-epubReadingSystem">
                  B. JavaScript epubReadingSystem Object
                </a>
                <ol>
                  <li>
                    <a href="epub30-contentdocs.xhtml#app-ers-syntax">
                      B.1. Syntax
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#app-ers-desc">
                      B.2. Description
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#app-ers-properties">
                      B.3. Properties
                    </a>
                  </li>
                  <li>
                    <a href="epub30-contentdocs.xhtml#app-ers-methods">
                      B.4. Methods
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-contentdocs.xhtml#app-ers-hasFeature">
                          B.4.1. hasFeature
                        </a>
                        <ol>
                          <li>
                            <a href="epub30-contentdocs.xhtml#app-ers-hasFeature-syntax">
                              B.4.1.1. Syntax
                            </a>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#app-ers-hasFeature-desc">
                              B.4.1.2. Description
                            </a>
                          </li>
                          <li>
                            <a href="epub30-contentdocs.xhtml#app-ers-hasFeature-features">
                              B.4.1.3. Features
                            </a>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li id="mo">
            <a href="epub30-mediaoverlays.xhtml">EPUB Media Overlays 3.0</a>
            <ol>
              <li>
                <a href="epub30-mediaoverlays.xhtml#sec-overview">
                  1. Overview
                </a>
                <ol>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-overview-purpose-and-scope">
                      1.1. Purpose and Scope
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-overview-relationship">
                      1.2. Relationship to Other Specifications
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-conformance">
                      1.4. Conformance Statements
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-mediaoverlays.xhtml#sec-media-overlays-document-definition">
                  2. Media Overlay Document Definition
                </a>
                <ol>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-overlays-introduction">
                      2.1. Introduction
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-overlays-content-conf">
                      2.2. Content Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-overlays-rs-conf">
                      2.3. Reading System Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-overlays-def">
                      2.4. Media Overlay Document Definition
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-smil-smil-elem">
                          2.4.1. The <code className="literal">smil</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-smil-head-elem">
                          2.4.2. The <code className="literal">head</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-smil-metadata-elem">
                          2.4.3. The <code className="literal">metadata</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-smil-body-elem">
                          2.4.4. The <code className="literal">body</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-smil-seq-elem">
                          2.4.5. The <code className="literal">seq</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-smil-par-elem">
                          2.4.6. The <code className="literal">par</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-smil-text-elem">
                          2.4.7. The <code className="literal">text</code>{' '}
                          Element
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-smil-audio-elem">
                          2.4.8. The <code className="literal">audio</code>{' '}
                          Element
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-mediaoverlays.xhtml#sec-overlay-docs">
                  3. Creating Media Overlays
                </a>
                <ol>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-docs-overview">
                      3.1. Overview
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-docs-relations">
                      3.2. Relationship to the EPUB Content Document
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-media-overlays-structure">
                          3.2.1. Structure{' '}
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-media-overlays-granularity">
                          3.2.2. Granularity
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-audio-video">
                          3.2.3. Embedded Audio and Video
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-tts">
                          3.2.4. Text-to-Speech
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-docs-semantic-inflection">
                      3.3. Semantic Inflection
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-docs-assoc-style">
                      3.4. Associating Style Information
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-docs-package">
                      3.5. Packaging
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-package-including">
                          3.5.1. Including Media Overlays
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-package-metadata">
                          3.5.2. Media Overlays Metadata Vocabulary
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-mediaoverlays.xhtml#sec-overlay-behaviors">
                  4. Playback Behaviors
                </a>
                <ol>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-behaviors-loading">
                      4.1. Loading the Media Overlay
                    </a>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-behaviors-playback">
                      4.2. Basic Playback
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-rsconf-timing-synch">
                          4.2.1. Timing and Synchronization
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-rsconf-rendering-audio">
                          4.2.2. Rendering Audio
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-rsconf-rendering-text">
                          4.2.3. Rendering EPUB Content Document Elements
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-behaviors-interaction">
                      4.3. Interacting with the EPUB Content Document
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-rsconf-navigation">
                          4.3.1. Navigation
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-embedded-media">
                          4.3.2. Embedded Audio and Video
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-text-to-speech">
                          4.3.3. Text-to-Speech
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#sec-behaviors-skip-escape">
                      4.4. Skippability and Escapability
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-skippability">
                          4.4.1. Skippability
                        </a>
                      </li>
                      <li>
                        <a href="epub30-mediaoverlays.xhtml#sec-escabaility">
                          4.4.2. Escapability
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-mediaoverlays.xhtml#app-overlays-schema">
                  A. Media Overlays Schema
                </a>
                <ol>
                  <li>
                    <a href="epub30-mediaoverlays.xhtml#app-overlays-schema-using">
                      A.1. Using the Media Overlays Schema
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-mediaoverlays.xhtml#app-clock-examples">
                  B. Examples of Clock Values
                </a>
              </li>
            </ol>
          </li>
          <li id="ack">
            <a href="epub30-acknowledgements.xhtml">
              Acknowledgements and Contributors
            </a>
          </li>
          <li id="ref">
            <a href="epub30-references.xhtml">References</a>
          </li>
          <li id="ocf">
            <a href="epub30-ocf.xhtml">EPUB Open Container Format (OCF) 3.0</a>
            <ol>
              <li>
                <a href="epub30-ocf.xhtml#sec-overview">1. Overview</a>
                <ol>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-overview-purpose-and-scope">
                      1.1. Purpose and Scope
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-conformance">
                      1.3. Conformance Statements
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#ocf-conformance-content">
                      1.4. Content Conformance
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#ocf-conformance-rs">
                      1.5. Reading System Conformance
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-ocf.xhtml#sec-container-abstract">
                  2. OCF Abstract Container
                </a>
                <ol>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-container-abstract-overview">
                      2.1. Overview
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-container-file-and-dir-structure">
                      2.2. File and Directory Structure
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-container-iri">
                      2.3. Relative IRIs for Referencing Other Components
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-container-filenames">
                      2.4. File Names
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-container-metainf">
                      2.5. META-INF
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-ocf.xhtml#sec-container-metainf-container.xml">
                          2.5.1. Container – META-INF/container.xml
                        </a>
                      </li>
                      <li>
                        <a href="epub30-ocf.xhtml#sec-container-metainf-encryption.xml">
                          2.5.2. Encryption – META-INF/encryption.xml
                        </a>
                      </li>
                      <li>
                        <a href="epub30-ocf.xhtml#sec-container-metainf-manifest.xml">
                          2.5.3. Manifest – META-INF/manifest.xml
                        </a>
                      </li>
                      <li>
                        <a href="epub30-ocf.xhtml#sec-container-metainf-metadata.xml">
                          2.5.4. Metadata – META-INF/metadata.xml
                        </a>
                      </li>
                      <li>
                        <a href="epub30-ocf.xhtml#sec-container-metainf-rights.xml">
                          2.5.5. Rights Management – META-INF/rights.xml
                        </a>
                      </li>
                      <li>
                        <a href="epub30-ocf.xhtml#sec-container-metainf-signatures.xml">
                          2.5.6. Digital Signatures – META-INF/signatures.xml
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-ocf.xhtml#physical-container-zip">
                  3. OCF ZIP Container
                </a>
                <ol>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-container-zip-overview">
                      3.1. Overview
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-zip-container-zipreqs">
                      3.2. ZIP File Requirements
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#sec-zip-container-mime">
                      3.3. OCF ZIP Container Media Type Identification
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-ocf.xhtml#font-obfuscation">
                  4. Font Obfuscation
                </a>
                <ol>
                  <li>
                    <a href="epub30-ocf.xhtml#fobfus-intro">
                      4.1. Introduction
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#fobfus-algorithm">
                      4.2. Obfuscation Algorithm
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#fobfus-keygen">
                      4.3. Generating the Obfuscation Key
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#fobfus-specifying">
                      4.4. Specifying Obfuscated Resources
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-ocf.xhtml#app-schemas">A. Schemas</a>
                <ol>
                  <li>
                    <a href="epub30-ocf.xhtml#app-schema-container">
                      A.1. Schema for{' '}
                      <code className="filename">container.xml</code>
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#app-schema-encryption">
                      A.2. Schema for{' '}
                      <code className="filename">encryption.xml</code>
                    </a>
                  </li>
                  <li>
                    <a href="epub30-ocf.xhtml#app-schema-signatures">
                      A.3. Schema for{' '}
                      <code className="filename">signatures.xml</code>
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-ocf.xhtml#example">B. Example</a>
              </li>
              <li>
                <a href="epub30-ocf.xhtml#app-media-type">
                  C. The <code>application/epub+zip</code> Media Type
                </a>
              </li>
            </ol>
          </li>
          <li id="cha">
            <a href="epub30-changes.xhtml">EPUB 3 Changes from EPUB 2.0.1</a>
            <ol>
              <li>
                <a href="epub30-changes.xhtml#sec-introduction">
                  1. Introduction
                </a>
                <ol>
                  <li>
                    <a href="epub30-changes.xhtml#sec-diff-intro-history">
                      1.1. EPUB Revision History
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-changes.xhtml#sec-history">
                  2. Changes to EPUB Specification Documents
                </a>
                <ol>
                  <li>
                    <a href="epub30-changes.xhtml#sec-history-intro">
                      2.1. Changes in Document Organization{' '}
                    </a>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-terminology-changes">
                      2.2. Changes in Terminology{' '}
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-changes.xhtml#sec-new-changed">
                  3. New and Changed Functionality in EPUB 3
                </a>
                <ol>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-cd">
                      3.1. Content Documents
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-xhtml5">
                          3.1.1. HTML5
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-svg">
                          3.1.2. SVG
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-mathml">
                          3.1.3. MathML
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-semantic-inflection">
                          3.1.4. Semantic Inflection
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-switch">
                          3.1.5. Content Switching
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-nav">
                      3.2. Navigation
                    </a>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-linking">
                      3.3. Linking
                    </a>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-scrp">
                      3.4. Scripting and Interactivity
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-scripting">
                          3.4.1. Scripting
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-trigger">
                          3.4.2. Triggers
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-bindings">
                          3.4.3. Bindings
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-styling">
                      3.5. Styling and Layout
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-css">
                          3.5.1. CSS
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-embedded-fonts">
                          3.5.2. Embedded Fonts
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-ocf-obf">
                          3.5.3. Font Obfuscation
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-media">
                      3.6. Rich Media
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-audio-video">
                          3.6.1. Audio and Video
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-mo">
                          3.6.2. Media Overlays
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-meta">
                      3.7. Metadata
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-meta-package">
                          3.7.1. Publication Metadata and Identity
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-meta-resources">
                          3.7.2. Resource Metadata
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-speech">
                      3.8. Speech
                    </a>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-package">
                      3.9. Manifest Fallbacks
                    </a>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-ocf">
                      3.10. Containment
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-remote">
                          3.10.1. Remote Resources
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-ocf-white-space">
                          3.10.2. Whitespace in MIMETYPE file
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-new-changed-ocf-namechars">
                          3.10.3. Disallowed characters in OCF file names
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-new-changed-xml-unicode">
                      3.11. XML and Unicode
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="epub30-changes.xhtml#sec-replaced">
                  4. EPUB 2.0.1 Features Replaced in EPUB 3
                </a>
                <ol>
                  <li>
                    <a href="epub30-changes.xhtml#sec-removals">
                      4.1. Features Removed from EPUB 3
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-changes.xhtml#sec-removals-dtbook">
                          4.1.1. DTBook
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-removals-out-of-line-XML-islands">
                          4.1.2. Out-of-Line XML Islands
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-removals-tours">
                          4.1.3. Tours
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-removals-filesystem-container">
                          4.1.4. Filesystem Container
                        </a>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <a href="epub30-changes.xhtml#sec-deprecations">
                      4.2. Features Deprecated/Obsoleted in EPUB 3
                    </a>
                    <ol>
                      <li>
                        <a href="epub30-changes.xhtml#sec-deprecations-guide">
                          4.2.1. Guide
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-deprecations-ncx">
                          4.2.2. NCX
                        </a>
                      </li>
                      <li>
                        <a href="epub30-changes.xhtml#sec-deprecations-meta201">
                          4.2.3. 2.0.1 meta element
                        </a>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </nav>

      <nav {...epub_type('landmarks')}>
        <h2>Guide</h2>
        <ol>
          <li>
            <a {...epub_type('toc')} href="#toc">
              Table of Contents
            </a>
          </li>
          <li>
            <a
              {...epub_type('bodymatter')}
              href="epub30-overview.xhtml#sec-intro"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              {...epub_type('bibliography')}
              href="epub30-references.xhtml#references"
            >
              References
            </a>
          </li>
          <li>
            <a
              {...epub_type('glossary')}
              href="epub30-terminology.xhtml#terminology"
            >
              Terminology
            </a>
          </li>
        </ol>
      </nav>
    </body>
  </>,
)

export const example_changes = renderToString(
  <>
    <head>
      <meta charSet="utf-8" />
      <title>EPUB 3 Changes from EPUB 2.0.1</title>
      <link rel="stylesheet" type="text/css" href="../css/epub-spec.css" />
    </head>
    <body>
      <div style={{ float: 'right' }}>
        <img src="../img/idpflogo_web_125.jpg" alt="IDPF Logo" />
      </div>
      <h1 className="title">EPUB 3 Changes from EPUB 2.0.1</h1>
      <p className="identity">
        <span className="releaseinfo">Recommended Specification</span>{' '}
        <span className="pubdate">11 October 2011</span>
      </p>
      <dl className="printhistory">
        <dt>This version</dt>
        <dd>
          <a href="http://www.idpf.org/epub/30/spec/epub30-changes-20111011.html">
            http://www.idpf.org/epub/30/spec/epub30-changes-20111011.html
          </a>
        </dd>
        <dt>Latest version</dt>
        <dd>
          <a href="http://www.idpf.org/epub/30/spec/epub30-changes.html">
            http://www.idpf.org/epub/30/spec/epub30-changes.html
          </a>
        </dd>
        <dt>Previous version</dt>
        <dd>
          <a href="http://www.idpf.org/epub/30/spec/epub30-changes-20110908.html">
            http://www.idpf.org/epub/30/spec/epub30-changes-20110908.html
          </a>
        </dd>
      </dl>
      <p className="diff">
        {' '}
        A diff of changes from the previous draft is available at{' '}
        <a href="http://code.google.com/p/epub-revision/source/diff?spec=svn3218&amp;old=3183&amp;r=3218&amp;format=side&amp;path=%2Ftrunk%2Fsrc%2Fspec%2Fepub30-changes.xml">
          this link
        </a>
        .{' '}
      </p>
      <div className="legal">
        <p className="copyright">
          Copyright © 2010, 2011 International Digital Publishing Forum™
        </p>
        <div className="legalnotice" title="Legal Notice">
          <a id="d7454e37" />
          <p>
            All rights reserved. This work is protected under Title 17 of the
            United States Code. Reproduction and dissemination of this work with
            changes is prohibited except with the written permission of the{' '}
            <a href="http://www.idpf.org">
              International Digital Publishing Forum (IDPF)
            </a>
            .{' '}
          </p>
          <p>
            EPUB is a registered trademark of the International Digital
            Publishing Forum.
          </p>
        </div>
      </div>
      <div className="authorgroup">
        <p className="bridgehead">Editors</p>
        <p className="editor">
          William McCoy, International Digital Publishing Forum (IDPF){' '}
        </p>
        <p className="editor">Markus Gylling, DAISY Consortium </p>
      </div>
      <nav className="toc" id="toc">
        <p>
          <strong>Table of Contents</strong>
        </p>
        <ol>
          <li>
            <a href="#sec-introduction">1. Introduction</a>
          </li>
          <li>
            <ol>
              <li>
                <a href="#sec-diff-intro-history">1.1. EPUB Revision History</a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#sec-history">
              2. Changes to EPUB Specification Documents
            </a>
          </li>
          <li>
            <ol>
              <li>
                <a href="#sec-history-intro">
                  2.1. Changes in Document Organization{' '}
                </a>
              </li>
              <li>
                <a href="#sec-terminology-changes">
                  2.2. Changes in Terminology{' '}
                </a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#sec-new-changed">
              3. New and Changed Functionality in EPUB 3
            </a>
          </li>
          <li>
            <ol>
              <li>
                <a href="#sec-new-changed-cd">3.1. Content Documents</a>
              </li>
              <li>
                <ol>
                  <li>
                    <a href="#sec-new-changed-xhtml5">3.1.1. HTML5</a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-svg">3.1.2. SVG</a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-mathml">3.1.3. MathML</a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-semantic-inflection">
                      3.1.4. Semantic Inflection
                    </a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-switch">
                      3.1.5. Content Switching
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#sec-new-changed-nav">3.2. Navigation</a>
              </li>
              <li>
                <a href="#sec-new-changed-linking">3.3. Linking</a>
              </li>
              <li>
                <a href="#sec-new-changed-scrp">
                  3.4. Scripting and Interactivity
                </a>
              </li>
              <li>
                <ol>
                  <li>
                    <a href="#sec-new-changed-scripting">3.4.1. Scripting</a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-trigger">3.4.2. Triggers</a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-bindings">3.4.3. Bindings</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#sec-new-changed-styling">3.5. Styling and Layout</a>
              </li>
              <li>
                <ol>
                  <li>
                    <a href="#sec-new-changed-css">3.5.1. CSS</a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-embedded-fonts">
                      3.5.2. Embedded Fonts
                    </a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-ocf-obf">
                      3.5.3. Font Obfuscation
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#sec-new-changed-media">3.6. Rich Media</a>
              </li>
              <li>
                <ol>
                  <li>
                    <a href="#sec-new-changed-audio-video">
                      3.6.1. Audio and Video
                    </a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-mo">3.6.2. Media Overlays</a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#sec-new-changed-meta">3.7. Metadata</a>
              </li>
              <li>
                <ol>
                  <li>
                    <a href="#sec-new-changed-meta-package">
                      3.7.1. Publication Metadata and Identity
                    </a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-meta-resources">
                      3.7.2. Resource Metadata
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#sec-new-changed-speech">3.8. Speech</a>
              </li>
              <li>
                <a href="#sec-new-changed-package">3.9. Manifest Fallbacks</a>
              </li>
              <li>
                <a href="#sec-new-changed-ocf">3.10. Containment</a>
              </li>
              <li>
                <ol>
                  <li>
                    <a href="#sec-new-changed-remote">
                      3.10.1. Remote Resources
                    </a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-ocf-white-space">
                      3.10.2. Whitespace in MIMETYPE file
                    </a>
                  </li>
                  <li>
                    <a href="#sec-new-changed-ocf-namechars">
                      3.10.3. Disallowed characters in OCF file names
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#sec-new-changed-xml-unicode">3.11. XML and Unicode</a>
              </li>
            </ol>
          </li>
          <li>
            <a href="#sec-replaced">
              4. EPUB 2.0.1 Features Replaced in EPUB 3
            </a>
          </li>
          <li>
            <ol>
              <li>
                <a href="#sec-removals">4.1. Features Removed from EPUB 3</a>
              </li>
              <li>
                <ol>
                  <li>
                    <a href="#sec-removals-dtbook">4.1.1. DTBook</a>
                  </li>
                  <li>
                    <a href="#sec-removals-out-of-line-XML-islands">
                      4.1.2. Out-of-Line XML Islands
                    </a>
                  </li>
                  <li>
                    <a href="#sec-removals-tours">4.1.3. Tours</a>
                  </li>
                  <li>
                    <a href="#sec-removals-filesystem-container">
                      4.1.4. Filesystem Container
                    </a>
                  </li>
                </ol>
              </li>
              <li>
                <a href="#sec-deprecations">
                  4.2. Features Deprecated/Obsoleted in EPUB 3
                </a>
              </li>
              <li>
                <ol>
                  <li>
                    <a href="#sec-deprecations-guide">4.2.1. Guide</a>
                  </li>
                  <li>
                    <a href="#sec-deprecations-ncx">4.2.2. NCX</a>
                  </li>
                  <li>
                    <a href="#sec-deprecations-meta201">
                      4.2.3. 2.0.1 meta element
                    </a>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </nav>
      <section className="chapter" title="1 Introduction" id="sec-introduction">
        <h2 className="title">
          <span className="link-marker">
            <a
              className="hidden-reveal"
              title="Link here"
              href="#sec-introduction"
            >
              ›
            </a>
             
          </span>
          1 Introduction
        </h2>
        <p>
          EPUB® is an interchange and delivery format for digital publications,
          based on XML and Web Standards. An EPUB Publication can be thought of
          as a reliable packaging of Web content that represents a digital book,
          magazine, or other type of publication, and able to distributed for
          online and offline consumption.{' '}
        </p>
        <p>
          This document, EPUB 3 Changes from EPUB 2.0.1, describes changes made
          in the third major revision of EPUB, including some rationale for the
          changes, and some guidance for content authors and Reading System
          developers regarding backwards compatibility considerations.
        </p>
        <p>
          This document is non-normative. The EPUB specification documents
          should be consulted for definitive information on EPUB 3:
        </p>
        <div className="itemizedlist" id="sibling-specs">
          <ul className="itemizedlist">
            <li className="listitem">
              <p>
                EPUB Publications 3.0{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refPublications3"
                  title="EPUB Publications 3.0"
                >
                  [<abbr>Publications30</abbr>]
                </a>
                , which defines publication-level semantics and overarching
                conformance requirements for EPUB Publications.
              </p>
            </li>
            <li className="listitem">
              <p>
                EPUB Content Documents 3.0{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
                , which defines profiles of XHTML, SVG and CSS for use in the
                context of EPUB Publications.
              </p>
            </li>
            <li className="listitem">
              <p>
                EPUB Open Container Format (OCF) 3.0{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refOCF30"
                  title="Open Container Format 3.0"
                >
                  [<abbr>OCF3</abbr>]
                </a>
                , which defines a file format and processing model for
                encapsulating a set of related resources into a single-file
                (ZIP) Container.
              </p>
            </li>
            <li className="listitem">
              <p>
                EPUB Media Overlays 3.0{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refOverlays3"
                  title="EPUB Media Overlays 3.0"
                >
                  [<abbr>MediaOverlays30</abbr>]
                </a>
                , which defines a format and a processing model for
                synchronization of text and audio.
              </p>
            </li>
          </ul>
        </div>
        <p>
          Unless otherwise specified, terms used herein have the meaning defined
          in these specifications.
        </p>
        <section
          className="section"
          title="1.1 EPUB Revision History"
          id="sec-diff-intro-history"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-diff-intro-history"
              >
                ›
              </a>
               
            </span>
            1.1 EPUB Revision History
          </h3>
          <p>
            EPUB had its roots in the interchange format known as the Open EBook
            Publication Structure (OEBPS). OEBPS 1.0 was approved in 1999 by the
            Open eBook Forum, an organization that later became the
            International Digital Publishing Forum (IDPF). Subsequent revisions
            1.1 and 1.2 were approved by the IDPF in 2001 and 2002 respectively.
          </p>
          <p>
            {' '}
            It was realized that a need existed for a format standard that could
            be used for delivery as well as interchange, and work began in late
            2005 on a single-file container format for OEPBS, which was approved
            by the IDPF as the OEBPS Container Format (OCF) in 2006. Work on a
            2.0 revision of OEBPS began in parallel which was approved as the
            renamed EPUB 2.0 in October, 2007, consisting of a triumvirate of
            specifications: Open Package Format (OPF), Open Publication Format
            (OPF) together with OCF. EPUB 2.0.1, a maintenance update to the 2.0
            specification set primarily intended clarify and correct errata in
            the specifications, was approved in September, 2010.{' '}
            <a
              className="biblioref"
              href="epub30-references.xhtml#refOPF2"
              title="Open Packaging Format 2.0.1"
            >
              [<abbr>OPF2</abbr>]
            </a>{' '}
            <a
              className="biblioref"
              href="epub30-references.xhtml#refOPS2"
              title="Open Publication Structure 2.0.1"
            >
              [<abbr>OPS2</abbr>]
            </a>{' '}
            <a
              className="biblioref"
              href="epub30-references.xhtml#refOCF2"
              title="Open Container Format 2.0.1"
            >
              [<abbr>OCF2</abbr>]
            </a>
          </p>
        </section>
      </section>
      <section
        className="chapter"
        title="2 Changes to EPUB Specification Documents"
        id="sec-history"
      >
        <h2 className="title">
          <span className="link-marker">
            <a className="hidden-reveal" title="Link here" href="#sec-history">
              ›
            </a>
             
          </span>
          2 Changes to EPUB Specification Documents
        </h2>
        <p>
          In addition to significant changes in functionality, the EPUB 3
          specifications are structured and named differently than EPUB 2.0.1,
          and certain terminology changes have been made to improve clarity. The
          following sections describe these changes.
        </p>
        <section
          className="section"
          title="2.1 Changes in Document Organization"
          id="sec-history-intro"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-history-intro"
              >
                ›
              </a>
               
            </span>
            2.1 Changes in Document Organization{' '}
          </h3>
          <p>
            In order to help those familiar with EPUB 2.0.1 to understand the
            mapping of information in EPUB 3, the following table shows where
            information in EPUB 3 is located relative to the EPUB 2.0.1
            specifications.
          </p>
          <div
            className="table"
            title="Specification Document Organization"
            id="spec-org"
          >
            <span className="link-marker">
              <a className="hidden-reveal" title="Link here" href="#spec-org">
                ›
              </a>
               
            </span>
            <p className="title">
              <strong>Specification Document Organization</strong>
            </p>
            <div className="table-contents">
              <table>
                <colgroup>
                  <col className="c1" />
                  <col className="c2" />
                  <col className="c3" />
                </colgroup>
                <thead>
                  <tr>
                    <th className="entry">Area</th>
                    <th className="entry">EPUB 3 Specification</th>
                    <th className="entry">EPUB 2.0.1 Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="entry">Overview</td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refEPUB3Overview"
                        title="EPUB 3 Overview"
                      >
                        EPUB 3 Overview
                      </a>
                    </td>
                    <td className="entry">(throughout)</td>
                  </tr>
                  <tr>
                    <td className="entry">
                      Publication-level Specification &amp; Package Docs
                    </td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refPublications3"
                        title="EPUB Publications 3.0"
                      >
                        EPUB Publications 3.0
                      </a>
                    </td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refOPF2"
                        title="Open Packaging Format 2.0.1"
                      >
                        Open Packaging Format 2.0.1
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="entry">Content-level Specification</td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refContentDocs3"
                        title="EPUB Content Documents 3.0"
                      >
                        EPUB Content Documents 3.0
                      </a>
                    </td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refOPS2"
                        title="Open Publication Structure 2.0.1"
                      >
                        Open Publication Structure 2.0.1
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="entry">EPUB Navigation Documents</td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refContentDocs3"
                        title="EPUB Content Documents 3.0"
                      >
                        EPUB Content Documents 3.0
                      </a>
                    </td>
                    <td className="entry">
                      N/A (NCX referenced as DAISY specification)
                    </td>
                  </tr>
                  <tr>
                    <td className="entry">Media Overlays</td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refOverlays3"
                        title="EPUB Media Overlays 3.0"
                      >
                        EPUB Media Overlays 3.0
                      </a>
                    </td>
                    <td className="entry">N/A</td>
                  </tr>
                  <tr>
                    <td className="entry">Container packaging</td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refOCF30"
                        title="Open Container Format 3.0"
                      >
                        EPUB Open Container Format 3.0
                      </a>
                    </td>
                    <td className="entry">
                      <a
                        className="biblioref"
                        href="epub30-references.xhtml#refOCF2"
                        title="Open Container Format 2.0.1"
                      >
                        Open Container Format 2.0.1
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="entry">Changes from previous version</td>
                    <td className="entry">EPUB 3 Changes from EPUB 2.0.1</td>
                    <td className="entry">(throughout)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br className="table-break" />
        </section>
        <section
          className="section"
          title="2.2 Changes in Terminology"
          id="sec-terminology-changes"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-terminology-changes"
              >
                ›
              </a>
               
            </span>
            2.2 Changes in Terminology{' '}
          </h3>
          <p>
            Maintaining consistent use of terminology from EPUB 2.0.1 to EPUB 3
            was a consideration during development, but changes in document
            organization, feature set and conformance requirements inevitably
            resulted in a number of changes.
          </p>
          <p>
            Each specification contains a Terminology section near the top that
            defines and explains the new terms (e.g.,{' '}
            <span className="phrase">
              <a href="epub30-terminology.xhtml#terminology">Terminology</a>{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refPublications3"
                title="EPUB Publications 3.0"
              >
                [<abbr>Publications30</abbr>]
              </a>
            </span>
            ).{' '}
          </p>
        </section>
      </section>
      <section
        className="chapter"
        title="3 New and Changed Functionality in EPUB 3"
        id="sec-new-changed"
      >
        <h2 className="title">
          <span className="link-marker">
            <a
              className="hidden-reveal"
              title="Link here"
              href="#sec-new-changed"
            >
              ›
            </a>
             
          </span>
          3 New and Changed Functionality in EPUB 3
        </h2>
        <p>
          This section describes the major new and changed functionality and
          constructs present in EPUB 3.
        </p>
        <section
          className="section"
          title="3.1 Content Documents"
          id="sec-new-changed-cd"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-cd"
              >
                ›
              </a>
               
            </span>
            3.1 Content Documents
          </h3>
          <section
            className="section"
            title="3.1.1 HTML5"
            id="sec-new-changed-xhtml5"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-xhtml5"
                >
                  ›
                </a>
                 
              </span>
              3.1.1 HTML5
            </h4>
            <p>
              EPUB 3's base content format is now based on the XML serialization
              of HTML5 (XHTML5){' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refContentDocs3"
                title="EPUB Content Documents 3.0"
              >
                [<abbr>ContentDocs30</abbr>]
              </a>
              , whereas EPUB2 supported two basic content types: a profile of
              XHTML 1.1 and DTBook{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refOPS2"
                title="Open Publication Structure 2.0.1"
              >
                [<abbr>OPS2</abbr>]
              </a>{' '}
              (a semantically-enhanced markup focused on accessibility
              concerns).
            </p>
            <p>
              The EPUB 3 XHTML Content Document definition includes both
              extensions to and restrictions on its HTML5 base, many of which
              are discussed below. Refer to{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml-additions">
                  HTML5 Extensions and Enhancements
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              and{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml-deviations">
                  HTML5 Deviations and Constraints
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              for complete information.
            </p>
          </section>
          <section
            className="section"
            title="3.1.2 SVG"
            id="sec-new-changed-svg"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-svg"
                >
                  ›
                </a>
                 
              </span>
              3.1.2 SVG
            </h4>
            <p>
              SVG documents can now appear in the spine in EPUB 3 (i.e., SVG no
              longer needs to be nested within an XHTML document).
            </p>
          </section>
          <section
            className="section"
            title="3.1.3 MathML"
            id="sec-new-changed-mathml"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-mathml"
                >
                  ›
                </a>
                 
              </span>
              3.1.3 MathML
            </h4>
            <p>
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml-mathml">
                  Support for MathML
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              is new in EPUB 3.
            </p>
          </section>
          <section
            className="section"
            title="3.1.4 Semantic Inflection"
            id="sec-new-changed-semantic-inflection"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-semantic-inflection"
                >
                  ›
                </a>
                 
              </span>
              3.1.4 Semantic Inflection
            </h4>
            <p>
              A method for inflecting domain-specific semantics in XHTML Content
              Documents using attributes has been added. Refer to{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml-semantic-inflection">
                  Semantic Inflection
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              for more information.
            </p>
          </section>
          <section
            className="section"
            title="3.1.5 Content Switching"
            id="sec-new-changed-switch"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-switch"
                >
                  ›
                </a>
                 
              </span>
              3.1.5 Content Switching
            </h4>
            <p>
              The <code>switch</code> element, initially introduced in{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refOPS2"
                title="Open Publication Structure 2.0.1"
              >
                [<abbr>OPS2</abbr>]
              </a>
              , has been simplified by having its processing model defined so
              that it does not require document preprocessing, and by removing
              the <code>requiredModules</code> attribute. This simplification is
              backwards compatible with existing EPUB 2 Reading System
              implementations. Refer to{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml-content-switch">
                  Content Switching
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              for more information.
            </p>
          </section>
        </section>
        <section
          className="section"
          title="3.2 Navigation"
          id="sec-new-changed-nav"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-nav"
              >
                ›
              </a>
               
            </span>
            3.2 Navigation
          </h3>
          <p>
            EPUB 3 defines a new human- and machine-readable grammar for
            publication-wide navigation information via a specialized adaptation
            of the general EPUB XHTML Content Document.{' '}
            <span className="phrase">
              <a href="epub30-contentdocs.xhtml#sec-xhtml-nav">
                EPUB Navigation Documents
              </a>{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refContentDocs3"
                title="EPUB Content Documents 3.0"
              >
                [<abbr>ContentDocs30</abbr>]
              </a>
            </span>{' '}
            supersedes the NCX grammar used in EPUB 2.
          </p>
          <p>
            While NCX support was optional for EPUB2 Reading Systems, inclusion
            of and support for EPUB Navigation Documents is required in EPUB 3.
          </p>
          <p>
            As noted in{' '}
            <span className="phrase">
              <a href="epub30-publications.xhtml#ncx-superseded">
                NCX Superseded
              </a>{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refPublications3"
                title="EPUB Publications 3.0"
              >
                [<abbr>Publications30</abbr>]
              </a>
            </span>
            , EPUB 3 Publications may include the EPUB 2 NCX for EPUB 2 Reading
            System forward compatibility purposes.
          </p>
        </section>
        <section
          className="section"
          title="3.3 Linking"
          id="sec-new-changed-linking"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-linking"
              >
                ›
              </a>
               
            </span>
            3.3 Linking
          </h3>
          <p>
            The IDPF has established a{' '}
            <a href="http://idpf.org/epub/linking/">
              registry of linking schemes
            </a>
            .{' '}
          </p>
          <p>
            <a
              className="biblioref"
              href="epub30-references.xhtml#refEPUBCFI"
              title="EPUB Canonical Fragment Identifier (epubcfi) Specification"
            >
              [<abbr>EPUBCFI</abbr>]
            </a>{' '}
            is the first scheme added to the registry, and can be used for
            linking into, between and within Publications. Reading System
            support for this scheme is required.
          </p>
        </section>
        <section
          className="section"
          title="3.4 Scripting and Interactivity"
          id="sec-new-changed-scrp"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-scrp"
              >
                ›
              </a>
               
            </span>
            3.4 Scripting and Interactivity
          </h3>
          <section
            className="section"
            title="3.4.1 Scripting"
            id="sec-new-changed-scripting"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-scripting"
                >
                  ›
                </a>
                 
              </span>
              3.4.1 Scripting
            </h4>
            <p>
              EPUB 3 Reading Systems may optionally support scripting, which was
              explicitly discouraged in EPUB 2. Scripted content{' '}
              <span className="phrase">
                <a href="epub30-publications.xhtml#scripted">
                  must be identified as such in the package manifest
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refPublications3"
                  title="EPUB Publications 3.0"
                >
                  [<abbr>Publications30</abbr>]
                </a>
              </span>{' '}
              and is subject to other restrictions and limitations as further
              described in{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-scripted-content">
                  Scripted Content Documents
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>
              .
            </p>
            <p>
              The new custom{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#app-epubReadingSystem">
                  epubReadingSystem JavaScript object
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>
              , provides scripts a means of querying a Reading System to
              determine its capabilities.
            </p>
          </section>
          <section
            className="section"
            title="3.4.2 Triggers"
            id="sec-new-changed-trigger"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-trigger"
                >
                  ›
                </a>
                 
              </span>
              3.4.2 Triggers
            </h4>
            <p>
              To facilitate content-specific user experiences for audio and
              video controls without requiring scripting, a new{' '}
              <code>trigger</code> element is defined in the{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml">
                  EPUB profile of HTML5
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              that allows declarative binding of activation events from image or
              textual elements to properties of audio and video players (e.g.,
              play, stop, pause).
            </p>
          </section>
          <section
            className="section"
            title="3.4.3 Bindings"
            id="sec-new-changed-bindings"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-bindings"
                >
                  ›
                </a>
                 
              </span>
              3.4.3 Bindings
            </h4>
            <p>
              The new{' '}
              <code>
                <span className="phrase">
                  <a href="epub30-publications.xhtml#sec-bindings-elem">
                    bindings
                  </a>{' '}
                  <a
                    className="biblioref"
                    href="epub30-references.xhtml#refPublications3"
                    title="EPUB Publications 3.0"
                  >
                    [<abbr>Publications30</abbr>]
                  </a>
                </span>
              </code>{' '}
              element provides a means to define script-based handlers for
              non-standard media types.
            </p>
          </section>
        </section>
        <section
          className="section"
          title="3.5 Styling and Layout"
          id="sec-new-changed-styling"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-styling"
              >
                ›
              </a>
               
            </span>
            3.5 Styling and Layout
          </h3>
          <section
            className="section"
            title="3.5.1 CSS"
            id="sec-new-changed-css"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-css"
                >
                  ›
                </a>
                 
              </span>
              3.5.1 CSS
            </h4>
            <p>
              EPUB 3 defines a profile of CSS based on CSS 2.1 with added
              modules from CSS3, whereas EPUB 2 was based on a specific subset
              of CSS 2. Refer to{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-css">EPUB Style Sheets</a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              for more information.
            </p>
            <p>
              Support for{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml-alternate-style-tags">
                  Alternate Style Tags
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              has been added, allowing Users to switch between predefined
              alternate viewing modes, such as day/night and horizontal/vertical
              modes.
            </p>
          </section>
          <section
            className="section"
            title="3.5.2 Embedded Fonts"
            id="sec-new-changed-embedded-fonts"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-embedded-fonts"
                >
                  ›
                </a>
                 
              </span>
              3.5.2 Embedded Fonts
            </h4>
            <p>
              EPUB 3 requires Reading Systems to support the OpenType and WOFF
              font formats for embedded fonts in conjunction with the CSS{' '}
              <code className="literal">@font-face</code> rules. Refer to{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-css-fonts">
                  CSS Fonts Level 3
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              for more information.
            </p>
          </section>
          <section
            className="section"
            title="3.5.3 Font Obfuscation"
            id="sec-new-changed-ocf-obf"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-ocf-obf"
                >
                  ›
                </a>
                 
              </span>
              3.5.3 Font Obfuscation
            </h4>
            <p>
              A new normative section on{' '}
              <span className="phrase">
                <a href="epub30-ocf.xhtml#font-obfuscation">Font Obfuscation</a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refOCF30"
                  title="Open Container Format 3.0"
                >
                  [<abbr>OCF3</abbr>]
                </a>
              </span>{' '}
              has been added the Open Container Format specification. This issue
              was previously outlined in{' '}
              <a href="http://www.idpf.org/doc_library/informationaldocs/FontManglingSpec_2.0.1_draft.htm">
                an IPDF informational document
              </a>
              .{' '}
            </p>
          </section>
        </section>
        <section
          className="section"
          title="3.6 Rich Media"
          id="sec-new-changed-media"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-media"
              >
                ›
              </a>
               
            </span>
            3.6 Rich Media
          </h3>
          <section
            className="section"
            title="3.6.1 Audio and Video"
            id="sec-new-changed-audio-video"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-audio-video"
                >
                  ›
                </a>
                 
              </span>
              3.6.1 Audio and Video
            </h4>
            <p>
              EPUB 3 inherits support for the HTML5 <code>audio</code> and{' '}
              <code>video</code> elements.
            </p>
            <p>
              EPUB 3 further specifies in its{' '}
              <span className="phrase">
                <a href="epub30-publications.xhtml#sec-core-media-types">
                  definition of support for Core Media Types
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refPublications3"
                  title="EPUB Publications 3.0"
                >
                  [<abbr>Publications30</abbr>]
                </a>
              </span>{' '}
              that all Reading Systems that support audio playback must support
              MP3 audio and should support MP4 AAC LC audio. While no video Core
              Media Types are defined in this version of EPUB, an{' '}
              <span className="phrase">
                <a href="epub30-publications.xhtml#note-video-codecs">
                  informative recommendation on codec support
                </a>
              </span>{' '}
              is provided as guidance to publishers and Reading System
              developers.
            </p>
          </section>
          <section
            className="section"
            title="3.6.2 Media Overlays"
            id="sec-new-changed-mo"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-mo"
                >
                  ›
                </a>
                 
              </span>
              3.6.2 Media Overlays
            </h4>
            <p>
              The EPUB Media Overlays 3.0{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refOverlays3"
                title="EPUB Media Overlays 3.0"
              >
                [<abbr>MediaOverlays30</abbr>]
              </a>{' '}
              specification defines a format and a processing model for
              publication-wide synchronization of text and audio.
            </p>
          </section>
        </section>
        <section
          className="section"
          title="3.7 Metadata"
          id="sec-new-changed-meta"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-meta"
              >
                ›
              </a>
               
            </span>
            3.7 Metadata
          </h3>
          <section
            className="section"
            title="3.7.1 Publication Metadata and Identity"
            id="sec-new-changed-meta-package"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-meta-package"
                >
                  ›
                </a>
                 
              </span>
              3.7.1 Publication Metadata and Identity
            </h4>
            <p>
              The minimally required Package metadata as defined in EPUB 2.0.1
              remains fundamentally unchanged. Only one new required metadata
              property, <code>dcterms:modified</code>, has been added. This new
              property contributes to the new solution to persistence in
              Publication Identifiers, as further discussed in{' '}
              <span className="phrase">
                <a href="epub30-publications.xhtml#sec-package-metadata-identifiers">
                  Publication Identifiers
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refPublications3"
                  title="EPUB Publications 3.0"
                >
                  [<abbr>Publications30</abbr>]
                </a>
              </span>
              .
            </p>
            <p id="new-meta-elem">
              The generic Package Document <code>meta</code> element{' '}
              <span className="phrase">
                <a href="epub30-publications.xhtml#sec-meta-elem">
                  has been enhanced
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refPublications3"
                  title="EPUB Publications 3.0"
                >
                  [<abbr>Publications30</abbr>]
                </a>
              </span>{' '}
              with a declarative term vocabulary association mechanism, as well
              as the ability to describe not only the Publication as a whole,
              but also individual resources and/or fragments within it. A set of
              EPUB-specific metadata properties has been added, allowing for
              example the identification of the Publication cover image, and
              sorting of related titles in the bookshelf.
            </p>
            <p>
              A new metadata{' '}
              <code>
                <span className="phrase">
                  <a href="epub30-publications.xhtml#sec-link-elem">link</a>{' '}
                  <a
                    className="biblioref"
                    href="epub30-references.xhtml#refPublications3"
                    title="EPUB Publications 3.0"
                  >
                    [<abbr>Publications30</abbr>]
                  </a>
                </span>
              </code>{' '}
              element has been added to the Package Document, allowing the
              association of external supplementary metadata resources with the
              publication (e.g., ONIX or XMP records).
            </p>
          </section>
          <section
            className="section"
            title="3.7.2 Resource Metadata"
            id="sec-new-changed-meta-resources"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-meta-resources"
                >
                  ›
                </a>
                 
              </span>
              3.7.2 Resource Metadata
            </h4>
            <p>
              The new <code>properties</code> attribute on the Package Document
              manifest <code>item</code> and spine <code>itemref</code> elements
              allows for the declaration of metadata about individual
              Publication Resources.
            </p>
            <p>
              {' '}
              These declarations are required in EPUB 3 in certain defined
              circumstances (e.g., for declaring that a Content Document
              contains scripting). Refer to{' '}
              <span className="phrase">
                <a href="epub30-publications.xhtml#sec-item-property-values">
                  Manifest item Properties
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refPublications3"
                  title="EPUB Publications 3.0"
                >
                  [<abbr>Publications30</abbr>]
                </a>
              </span>{' '}
              and{' '}
              <span className="phrase">
                <a href="epub30-publications.xhtml#sec-itemref-property-values">
                  Spine itemref Properties
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refPublications3"
                  title="EPUB Publications 3.0"
                >
                  [<abbr>Publications30</abbr>]
                </a>
              </span>{' '}
              for more information.
            </p>
          </section>
        </section>
        <section
          className="section"
          title="3.8 Speech"
          id="sec-new-changed-speech"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-speech"
              >
                ›
              </a>
               
            </span>
            3.8 Speech
          </h3>
          <p>
            Multiple features to assist Text-to-Speech (TTS) engines have been
            added. These include Package-level Pronunciation Lexicons, SSML
            attributes in XHTML Content Documents, and support for the CSS3
            Speech Module.{' '}
            <a
              className="biblioref"
              href="epub30-references.xhtml#refContentDocs3"
              title="EPUB Content Documents 3.0"
            >
              [<abbr>ContentDocs30</abbr>]
            </a>
          </p>
        </section>
        <section
          className="section"
          title="3.9 Manifest Fallbacks"
          id="sec-new-changed-package"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-package"
              >
                ›
              </a>
               
            </span>
            3.9 Manifest Fallbacks
          </h3>
          <p>
            The{' '}
            <span className="phrase">
              <a href="epub30-publications.xhtml#attrdef-item-fallback">
                manifest fallback mechanism
              </a>
            </span>{' '}
            has been restricted to only apply to documents in the{' '}
            <code>spine</code>. Publication Resources referenced from XHTML and
            SVG Content Documents and CSS must now be Core Media Types unless
            referenced in a context that provides{' '}
            <span className="phrase">
              <a href="epub30-publications.xhtml#sec-fallback-processing-flow">
                native intrinsic fallback capabilities
              </a>
            </span>
            .
          </p>
        </section>
        <section
          className="section"
          title="3.10 Containment"
          id="sec-new-changed-ocf"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-ocf"
              >
                ›
              </a>
               
            </span>
            3.10 Containment
          </h3>
          <section
            className="section"
            title="3.10.1 Remote Resources"
            id="sec-new-changed-remote"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-remote"
                >
                  ›
                </a>
                 
              </span>
              3.10.1 Remote Resources
            </h4>
            <p>
              There are new{' '}
              <span className="phrase">
                <a href="epub30-publications.xhtml#sec-resource-locations">
                  restrictions on references
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refPublications3"
                  title="EPUB Publications 3.0"
                >
                  [<abbr>Publications30</abbr>]
                </a>
              </span>{' '}
              to remote resources (i.e., Publication Resources not located in
              the OCF Container). The implications of this change are more fully
              described in{' '}
              <a
                href="#sec-removals-filesystem-container"
                title="4.1.4 Filesystem Container"
              >
                Removal of Filesystem Container
              </a>
              .{' '}
            </p>
          </section>
          <section
            className="section"
            title="3.10.2 Whitespace in MIMETYPE file"
            id="sec-new-changed-ocf-white-space"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-ocf-white-space"
                >
                  ›
                </a>
                 
              </span>
              3.10.2 Whitespace in MIMETYPE file
            </h4>
            <p>
              <a
                className="biblioref"
                href="epub30-references.xhtml#refOCF2"
                title="Open Container Format 2.0.1"
              >
                [<abbr>OCF2</abbr>]
              </a>{' '}
              restricted the required MIMETYPE file from having any leading or
              trailing spaces; in{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refOCF30"
                title="Open Container Format 3.0"
              >
                [<abbr>OCF3</abbr>]
              </a>{' '}
              the restriction against trailing whitespace has been removed.
            </p>
          </section>
          <section
            className="section"
            title="3.10.3 Disallowed characters in OCF file names"
            id="sec-new-changed-ocf-namechars"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-new-changed-ocf-namechars"
                >
                  ›
                </a>
                 
              </span>
              3.10.3 Disallowed characters in OCF file names
            </h4>
            <p>
              The list of characters disallowed in OCF file names has been{' '}
              <span className="phrase">
                <a href="epub30-ocf.xhtml#ocf-fn-chars">extended</a>
              </span>
              .
            </p>
          </section>
        </section>
        <section
          className="section"
          title="3.11 XML and Unicode"
          id="sec-new-changed-xml-unicode"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-new-changed-xml-unicode"
              >
                ›
              </a>
               
            </span>
            3.11 XML and Unicode
          </h3>
          <p>
            Support for XML 1.1, which was deprecated in OPS 2.0.1, has been
            removed. All XML documents must now be conformant to XML 1.0.
          </p>
          <p>
            The referenced version of XML 1.0 is the fifth edition, which means
            that Unicode version 5.0.0 is now supported (OPS 2.0.1, via its use
            of XML 1.0 fourth edition, supported Unicode 2.0).
          </p>
        </section>
      </section>
      <section
        className="chapter"
        title="4 EPUB 2.0.1 Features Replaced in EPUB 3"
        id="sec-replaced"
      >
        <h2 className="title">
          <span className="link-marker">
            <a className="hidden-reveal" title="Link here" href="#sec-replaced">
              ›
            </a>
             
          </span>
          4 EPUB 2.0.1 Features Replaced in EPUB 3
        </h2>
        <p>
          A number of features in EPUB 3 and its building-block Web Standards
          replace existing features in EPUB 2.0.1, and several features in EPUB
          2.0.1 that were not widely adopted by content authors or Reading
          Systems are discontinued. Such features, from a content conformance
          perspective, are either <span className="italic">removed</span> (which
          means that conformant EPUB 3 content might not use the construct) or{' '}
          <span className="italic">deprecated</span> (which means that use of
          the construct in EPUB 3 is allowed but not recommended). Note that, in
          most cases, Reading Systems are still required to support these
          constructs for backwards compatibility reasons (as normatively stated
          in the relevant specifications).
        </p>
        <p>
          The following sections list the EPUB 2.0.1 features removed and
          deprecated in EPUB 3.
        </p>
        <section
          className="section"
          title="4.1 Features Removed from EPUB 3"
          id="sec-removals"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-removals"
              >
                ›
              </a>
               
            </span>
            4.1 Features Removed from EPUB 3
          </h3>
          <section
            className="section"
            title="4.1.1 DTBook"
            id="sec-removals-dtbook"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-removals-dtbook"
                >
                  ›
                </a>
                 
              </span>
              4.1.1 DTBook
            </h4>
            <p>
              DAISY DTBook{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refZ39862005"
                title="ANSI/NISO Z39.86-2005: Specifications for the Digital Talking Book"
              >
                [<abbr>Z3986-2005</abbr>]
              </a>{' '}
              was an alternative syntax to XHTML 1.1 for Content Documents in
              OPS 2.0.1{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refOPS2"
                title="Open Publication Structure 2.0.1"
              >
                [<abbr>OPS2</abbr>]
              </a>{' '}
              in order to provide an option for more semantic, and thus more
              accessible, content. As HTML5 includes intrinsic semantic markup
              capabilities of a similar nature to DTBook, DTBook is no longer an
              alternative syntax in EPUB 3.{' '}
            </p>
          </section>
          <section
            className="section"
            title="4.1.2 Out-of-Line XML Islands"
            id="sec-removals-out-of-line-XML-islands"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-removals-out-of-line-XML-islands"
                >
                  ›
                </a>
                 
              </span>
              4.1.2 Out-of-Line XML Islands
            </h4>
            <p>
              OPF 2.0.1. specified an optional extension mechanism enabling a
              spine item to be a "custom module" XHTML or arbitrary XML styled
              with CSS. This feature was not widely adopted by content or
              Reading Systems, and has been removed from EPUB 3. As a result the{' '}
              <code>item</code> element no longer has the{' '}
              <code>required-namespace</code> and <code>fallback-style</code>{' '}
              attributes.
            </p>
          </section>
          <section
            className="section"
            title="4.1.3 Tours"
            id="sec-removals-tours"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-removals-tours"
                >
                  ›
                </a>
                 
              </span>
              4.1.3 Tours
            </h4>
            <p>
              The Package Document schema no longer includes the{' '}
              <code>tours</code> element (which was deprecated in OPF 2.0.1).
            </p>
          </section>
          <section
            className="section"
            title="4.1.4 Filesystem Container"
            id="sec-removals-filesystem-container"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-removals-filesystem-container"
                >
                  ›
                </a>
                 
              </span>
              4.1.4 Filesystem Container
            </h4>
            <p>
              OCF 3.0{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refOCF30"
                title="Open Container Format 3.0"
              >
                [<abbr>OCF3</abbr>]
              </a>{' '}
              only defines a single-file (ZIP-based) container, and no longer
              defines a "Filesystem Container" abstraction. This change was made
              in conjunction with new restrictions in Publications 3.0
              restricting references to remote resources in EPUB Publications to
              specific media types and contexts. Taken together, these changes
              mean that the only instantiation of an EPUB Publication defined at
              this time is the EPUB ZIP Container, and that EPUB files must in
              general contain all constituent parts of the Publication, with
              certain well-defined exceptions.{' '}
            </p>
            <p>
              These changes may seem counter-intuitive given that online
              consumption of content is increasingly prevalent, as are
              browser-based Reading System implementations. The Working Group
              recognizes this, and understands that in an online environment,
              particularly when browser-based, it will often be inefficient or
              even impractical to download an entire EPUB file to a client
              system before reading can occur. A number of significant issues
              exist for browser-based Reading Systems, however, including
              cross-domain resource loading restrictions in the browser security
              model and the potential for inadvertent interaction between
              script-based interactivity within EPUB 3 content and script-based
              Reading System implementations. Publishers and content
              distributors providing EPUB content are presently utilizing
              server-based software to manage these issues, in effect creating a
              distributed client-server Reading System in which a packaged EPUB
              file is ingested on a server and may be transformed en route to
              client software into whatever set of resources is convenient for
              that implementation. Consequently, there was no pressing
              requirement to define an interoperable distributed form of an EPUB
              Publication in order to meet the requirements of the Working Group
              charter.{' '}
            </p>
            <p>
              EPUB 2.x (via the OCF Filesystem container and by being relatively
              vague in the OPF specification about where absolute URLs were
              legal) can be considered to have incompletely described
              distributed publications without specifying conformance
              requirements for them. This was a combination of historical (with
              respect to OPF which was a revision to a predecessor specification
              that pre-dated any ZIP-based container) and aspirational (with
              respect to OCF) factors.{' '}
            </p>
            <p>
              Since the Working Group did have a goal to improve the
              interoperability of the EPUB ecosystem by increasing the clarity
              and rigor of our conformance requirements, it was decided that
              these partial definitions were unhelpful and should be removed
              from the EPUB 3 base specifications. The Working Group understands
              that networked Publications will be increasingly important, and
              expects future work to include development of robust interoperable
              conformance definitions for distributed EPUB Publications based on
              emerging content publisher and Reading System requirements.
            </p>
          </section>
        </section>
        <section
          className="section"
          title="4.2 Features Deprecated/Obsoleted in EPUB 3"
          id="sec-deprecations"
        >
          <h3 className="title">
            <span className="link-marker">
              <a
                className="hidden-reveal"
                title="Link here"
                href="#sec-deprecations"
              >
                ›
              </a>
               
            </span>
            4.2 Features Deprecated/Obsoleted in EPUB 3
          </h3>
          <section
            className="section"
            title="4.2.1 Guide"
            id="sec-deprecations-guide"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-deprecations-guide"
                >
                  ›
                </a>
                 
              </span>
              4.2.1 Guide
            </h4>
            <p>
              Use of the optional <code>guide</code> element in the Package
              Document has been deprecated in favor of the EPUB Navigation
              Document <code className="literal">landmarks</code> feature. Refer
              to{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml-nav">
                  EPUB Navigation Documents
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>{' '}
              for more information.
            </p>
          </section>
          <section
            className="section"
            title="4.2.2 NCX"
            id="sec-deprecations-ncx"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-deprecations-ncx"
                >
                  ›
                </a>
                 
              </span>
              4.2.2 NCX
            </h4>
            <p>
              As described in more detail in{' '}
              <a
                className="xref"
                href="#sec-new-changed-nav"
                title="3.2 Navigation"
              >
                Navigation
              </a>{' '}
              above, the NCX has been superseded in favor of{' '}
              <span className="phrase">
                <a href="epub30-contentdocs.xhtml#sec-xhtml-nav">
                  EPUB Navigation Documents
                </a>{' '}
                <a
                  className="biblioref"
                  href="epub30-references.xhtml#refContentDocs3"
                  title="EPUB Content Documents 3.0"
                >
                  [<abbr>ContentDocs30</abbr>]
                </a>
              </span>
              .{' '}
            </p>
          </section>
          <section
            className="section"
            title="4.2.3 2.0.1 meta element"
            id="sec-deprecations-meta201"
          >
            <h4 className="title">
              <span className="link-marker">
                <a
                  className="hidden-reveal"
                  title="Link here"
                  href="#sec-deprecations-meta201"
                >
                  ›
                </a>
                 
              </span>
              4.2.3 2.0.1 meta element
            </h4>
            <p>
              The <code>meta</code> element as defined in{' '}
              <a
                className="biblioref"
                href="epub30-references.xhtml#refOPF2"
                title="Open Packaging Format 2.0.1"
              >
                [<abbr>OPF2</abbr>]
              </a>{' '}
              has been superseded by the{' '}
              <a href="#new-meta-elem">new Package Document meta element</a>.{' '}
            </p>
          </section>
        </section>
      </section>
    </body>
  </>,
)
