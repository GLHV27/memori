const AppConstants = {
    'GOVERNORS_START_LOADING': null,
    'GOVERNORS_SEARCH_SUCCESS': null,
    'GOVERNORS_FAIL': null,
    'GAME_START': null,
    'GAME_OPEN_CARD': null,
};

for (let key in AppConstants) {
    AppConstants[key] = key;
}

export default AppConstants;