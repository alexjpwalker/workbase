export default {
  setCurrentQuery(state, query) {
    state.currentQuery = query;
  },
  currentDatabase(state, database) {
    state.currentDatabase = database;
  },
  loadingQuery(state, isRunning) {
    state.loadingQuery = isRunning;
  },
  setVisFacade(state, facade) {
    state.visFacade = Object.freeze(facade); // Freeze it so that Vue does not attach watchers to its properties
  },
  selectedNodes(state, nodeIds) {
    state.selectedNodes = (nodeIds) ? state.visFacade.getNode(nodeIds) : null;
  },
  metaTypeInstances(state, instances) {
    state.metaTypeInstances = instances;
  },
  registerCanvasEvent(state, { event, callback }) {
    state.visFacade.registerEventHandler(event, callback);
  },
  updateCanvasData(state) {
    if (state.visFacade) {
      state.canvasData = {
        entities: state.visFacade.getAllNodes().filter(x => x.baseType === 'ENTITY').length,
        attributes: state.visFacade.getAllNodes().filter(x => x.baseType === 'ATTRIBUTE').length,
        relations: state.visFacade.getAllNodes().filter(x => x.baseType === 'RELATION').length };
    }
  },
  setContextMenu(state, contextMenu) {
    state.contextMenu = contextMenu;
  },
  setGlobalErrorMsg(state, errorMsg) {
    state.globalErrorMsg = errorMsg;
  },
};