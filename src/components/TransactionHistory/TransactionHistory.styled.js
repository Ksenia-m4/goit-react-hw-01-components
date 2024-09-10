import styled from 'styled-components';

const TransactionTable = styled.table`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
`;

const TableHead = styled.thead`
  background-color: #00bcd4;
  color: white;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
`;

const TableHeader = styled.th`
  text-transform: uppercase;
  padding: 16px 16px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f3f3f3;
  }

  &:nth-child(odd) {
    background-color: white;
  }

  &:last-child td {
    border-bottom: none;
  }
`;

const TableData = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #e0e0e0;
`;

export { TransactionTable, TableHead, TableHeader, TableRow, TableData };
