function findPath(src, trgt, graph) {
  const res = [];
  const DFS = (node, path) => {
    path.push(node);

    // if we've reached the target, we've found a path
    if (node === trgt) {
      res.push(path);
      return;
    }

    for (let edge of graph[node]) {
      DFS(edge, [...path]);
    }
  };

  DFS(src, []);

  return res;
}

export {findPath};