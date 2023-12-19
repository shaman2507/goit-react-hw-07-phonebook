export const handlePanding = state => {
    state.isLoading = true;
    state.error = '';
};
  
export const handleRejected =
    (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    };