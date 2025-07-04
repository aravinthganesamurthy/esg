import React, { useCallback } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
} from '@mui/material';
import { useESGData } from '../../Context/esg';

const GroupedTable = () => {
  const { filteredData } = useESGData();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const getComparator = useCallback((order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }, []);

  const visibleRows = React.useMemo(
    () =>
      [...filteredData]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredData, getComparator, order, orderBy, page, rowsPerPage]
  );

  return (
    <div className='table-container'>
      
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer component={Paper}>
            <Table>
              {/* Grouped Headers */}
              <TableHead>
                <TableRow className='table-first-layer'>
                  <TableCell rowSpan={2}>Company ID</TableCell>
                  <TableCell rowSpan={2}>
                    <TableSortLabel
                      active={orderBy === 'Company Name'}
                      direction={orderBy === 'Company Name' ? order : 'asc'}
                      onClick={() => handleRequestSort('Company Name')}>
                      Company Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell rowSpan={2}>Industry</TableCell>
                  <TableCell rowSpan={2}>Environmental Score</TableCell>
                  <TableCell rowSpan={2}>Social Score</TableCell>
                  <TableCell rowSpan={2}>Governance Score</TableCell>
                  <TableCell rowSpan={2}>ESG Composite Score</TableCell>
                  <TableCell rowSpan={2}>
                    ESG Composite Score (Prev. Year)
                  </TableCell>

                  <TableCell colSpan={6}>Environment</TableCell>
                  <TableCell colSpan={4}>Social</TableCell>
                  <TableCell colSpan={4}>Governance</TableCell>
                </TableRow>

                <TableRow className='table-second-layer'>
                  <TableCell>Carbon Emissions (Tonnes)</TableCell>
                  <TableCell>Energy Usage (GW)</TableCell>
                  <TableCell>Energy Efficiency</TableCell>
                  <TableCell>Water Usage (Tonnes)</TableCell>
                  <TableCell>Water Conservation</TableCell>
                  <TableCell>Pollution Index (Out of 1)</TableCell>
                  <TableCell>Diversity</TableCell>
                  <TableCell>Data Privacy</TableCell>
                  <TableCell>Supply Chain Responsibility</TableCell>
                  <TableCell>Community Engagement</TableCell>
                  <TableCell>Board Diversity</TableCell>
                  <TableCell>Perfomance Based Compenation</TableCell>
                  <TableCell>Transparency Score</TableCell>
                  <TableCell>Regulatory Compliance</TableCell>
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {visibleRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className='cid'>{row['Company ID']}</TableCell>
                    <TableCell>{row['Company Name']}</TableCell>
                    <TableCell>{row['Industry']}</TableCell>
                    <TableCell>{row['Environmental Score']}</TableCell>
                    <TableCell>{row['Social Score']}</TableCell>
                    <TableCell>{row['Governance Score']}</TableCell>
                    <TableCell>{row['ESG Composite Score']}</TableCell>
                    <TableCell>
                      {row['ESG Composite Score (Prev. Year)']}
                    </TableCell>

                    <TableCell>
                      {row['Environment']['Carbon Emissions (Tonnes)']}
                    </TableCell>
                    <TableCell>
                      {row['Environment']['Energy Usage (GW)']}
                    </TableCell>
                    <TableCell>
                      {row['Environment']['Energy Efficiency']}
                    </TableCell>
                    <TableCell>
                      {row['Environment']['Water Usage (Tonnes)']}
                    </TableCell>
                    <TableCell>
                      {row['Environment']['Water Conservation']}
                    </TableCell>
                    <TableCell>
                      {row['Environment']['Pollution Index (Out of 1)']}
                    </TableCell>

                    <TableCell>{row['Social']['Diversity']}</TableCell>
                    <TableCell>{row['Social']['Data Privacy']}</TableCell>
                    <TableCell>
                      {row['Social']['Supply Chain Responsibility']}
                    </TableCell>
                    <TableCell>
                      {row['Social']['Community Engagement']}
                    </TableCell>

                    <TableCell>
                      {row['Governance']['Board Diversity']}
                    </TableCell>
                    <TableCell>
                      {row['Governance']['Perfomance Based Compenation']}
                    </TableCell>
                    <TableCell>
                      {row['Governance']['Transparency Score']}
                    </TableCell>
                    <TableCell>
                      {row['Governance']['Regulatory Compliance']}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 50, 100]}
            component='div'
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      
    </div>
  );
};

export default GroupedTable;
