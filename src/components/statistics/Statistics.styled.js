import styled from 'styled-components';

const Section = styled.div`
  width: 300px;
  background-color: white;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px auto;
`;

const SectionTitle = styled.h2`
  padding: 20px;
  text-transform: uppercase;
  font-size: 18px;
  color: #333;
  font-weight: 500;
`;

const StatList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Item = styled.li`
  width: 100%;
  background-color: 'gray';
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
`;

const Label = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
`;

const Percentage = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export { Section, SectionTitle, StatList, Item, Label, Percentage };
