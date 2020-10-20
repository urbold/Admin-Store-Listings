export default theme => ({
  searchbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    padding: [[0, theme.spacing(2)]]
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(5),
    right: theme.spacing(8)
  }
});
