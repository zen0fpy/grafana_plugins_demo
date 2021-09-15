import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory, useTheme} from '@grafana/ui';
interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data}) => {
  const theme = useTheme();
  const styles = getStyles();
  return (
    <table>
      <thead>
        <tr>
          <th>我的表哥</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>我的表哥</td>
        </tr>
      </tbody>
    </table>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
