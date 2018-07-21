const config = {
    daysInYear: 365,
    dayInMilliseconds: 1000 * 60 * 60 * 24,
    avatars: {
        small: {
            1: require(`./statics/images/governors/s_artuhov.jpg`),
            2: require(`./statics/images/governors/s_azarov.jpg`),
            3: require(`./statics/images/governors/s_burkov.jpg`),
            4: require(`./statics/images/governors/s_civilev.jpg`),
            5: require(`./statics/images/governors/s_moor.jpg`),
            6: require(`./statics/images/governors/s_nikitin.jpg`),
            7: require(`./statics/images/governors/s_nikolaev.jpg`),
            8: require(`./statics/images/governors/s_nosov.jpg`)
        },
        large: {
            1: require(`./statics/images/governors/l_artuhov.jpg`),
            2: require(`./statics/images/governors/l_azarov.jpg`),
            3: require(`./statics/images/governors/l_burkov.jpg`),
            4: require(`./statics/images/governors/l_civilev.jpg`),
            5: require(`./statics/images/governors/l_moor.jpg`),
            6: require(`./statics/images/governors/l_nikitin.jpg`),
            7: require(`./statics/images/governors/l_nikolaev.jpg`),
            8: require(`./statics/images/governors/l_nosov.jpg`)
        }
    },
    declension: {
        year: {
            zero: 'лет',
            one: 'год',
            some: 'года',
            many: 'лет'
        },
        moves: {
            zero: 'ходов',
            one: 'ход',
            some: 'хода',
            many: 'ходов'
        }
    }
};

export default config;
