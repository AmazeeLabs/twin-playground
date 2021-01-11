import { PreRenderHTMLArgs } from 'gatsby';

export const onPreRenderHTML = ({ getHeadComponents }: PreRenderHTMLArgs) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const headComponents = getHeadComponents();

  headComponents.forEach((element) => {
    if (!element) {
      return;
    }
    // @ts-ignore
    if (element.type === 'style' && element.props['data-href']) {
      // @ts-ignore
      element.type = 'link';
      // @ts-ignore
      element.props.href = element.props['data-href'];
      // @ts-ignore
      element.props.rel = 'stylesheet';
      // @ts-ignore
      element.props.type = 'text/css';

      // @ts-ignore
      delete element.props['data-href'];
      // @ts-ignore
      delete element.props.dangerouslySetInnerHTML;
    }
  });
};
