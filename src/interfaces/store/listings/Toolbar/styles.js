export default theme => ({
  root: {
    position: "sticky",
    padding: [[theme.spacing.unit, theme.spacing.unit, 0, theme.spacing.unit]]
  },
  interfaceName: {},
  filters: {
    flexGrow: 2
  },
  flexContainer: {
    height: 64
  },
  controls: {
    display: "flex"
  },
  filterLabel: {
    padding: [[0, theme.spacing(3)]]
  },
  search: {
    marginRight: theme.spacing(2)
  }
});
