use lol_html::{element, HtmlRewriter, Settings};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut output = vec![];

    let mut rewriter = HtmlRewriter::new(
        Settings {
            element_content_handlers: vec![element!("a[href]", |el| {
                let href = el
                    .get_attribute("href")
                    .expect("href was required")
                    .replace("http:", "https:");

                el.set_attribute("href", &href)?;

                Ok(())
            })],
            ..Settings::default()
        },
        |c: &[u8]| output.extend_from_slice(c),
    );

    rewriter.write(b"<div><a href=")?;
    rewriter.write(b"http://example.com>")?;
    rewriter.write(b"</a></div>")?;
    rewriter.end()?;

    assert_eq!(
        String::from_utf8(output)?,
        r#"<div><a href="https://example.com"></a></div>"#
    );
    Ok(())
}
