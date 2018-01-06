export default (resetRightToMoveToAllAction, players) => (
  {
    ...resetRightToMoveToAllAction,
    except : [ ...new Set([...resetRightToMoveToAllAction.except, ...players]) ]
  }
)
