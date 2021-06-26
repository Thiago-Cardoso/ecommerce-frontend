import React from 'react';
import styles from '../../../styles/AdminPanel.module.css';
import { Table } from 'react-bootstrap';
import StyledButton from '../StyledButton';

interface AdminListTableProps {
  first_title: String,
  second_title?: String,
  third_title?: String,
  fourth_title?: String,
  fifth_title?: String,
  sixth_title?: String
}

const AdminListTable: React.FC<AdminListTableProps> = ({ children, first_title, second_title, third_title, fourth_title, fifth_title, sixth_title }) => {
  return (
    <div className="pagination justify-content-end">
      <div className="pagination">
        <StyledButton action="<" type_button="blue" />
        <StyledButton action="1" type_button="blue" />
        <StyledButton action="2" type_button="blue" />
        <StyledButton action="3" type_button="blue" />

          <StyledButton action="31" type_button="blue" />
        <StyledButton action=">" type_button="blue" />
      </div>
    </div>
  )
}

export default AdminListTable;