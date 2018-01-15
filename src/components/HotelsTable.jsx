import React from 'react';
import PropTypes from 'prop-types';

import HotelRow from './HotelRow';

const HotelsTable = ({ hotels }) => (
  <table>
    <tobody>
      <tr><th>ホテル名</th></tr>
      {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
    </tobody>
  </table>
);

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;
