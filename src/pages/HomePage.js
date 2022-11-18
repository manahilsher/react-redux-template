import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchStuffsThunk } from '../store/actions';

const HomePage = props => {
  useEffect(() => {
    const fetchData = async () => {
      props.fetchStuffsThunk();
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <div>HomePage</div>
      {typeof props.stuffs === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        props.stuffs.map((stuff, i) => <p key={i}>{stuff}</p>)
      )}
    </div>
  );
};
const mapState = state => {
  return {
    stuffs: state.stuffReducer.stuffs
  };
};

export default connect(mapState, {
  fetchStuffsThunk
})(HomePage);
