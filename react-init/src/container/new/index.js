export default (location, callback) => {
    require.ensure([], function (require) { // thankful-activitySet
        callback(null, [
            // 列表
            {
                path: 'list',
                getComponents(location, callback) {
                    callback(null, require('./list').default);
                }
            },
        ]);
    }, 'new');
};