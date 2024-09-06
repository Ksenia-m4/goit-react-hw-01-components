import PropTypes from 'prop-types';

import {
  Item,
  Label,
  Percentage,
  Section,
  SectionTitle,
  StatList,
} from './Statistics.styled';

import getRandomHexColor from '../../utils/colorGenerator';

export const StatisticsCard = ({ stats, title }) => {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: getRandomHexColor() }}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Section>
  );
};

StatisticsCard.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
