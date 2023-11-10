


tailwind.config = {
    theme: {
        extend: {
            colors: {
                black: "#0C1618",
                white: "#F1DAC4",
                orange: "#C73E1D"
            },
            animation: {
                'fade-up': 'fadeUp .7s ease-in-out forwards',
                'fade-in': 'fadeIn 1.2s forwards',
                'fromRight': 'comeInFromRight .9s forwards',
                'fromLeft': 'comeInFromLeft .4s forwards'
            },
            keyframes: {
                fadeUp: {
                    "0%": {transform: "translateY(10rem)", opacity:"50%"},
                    "100%": {transform: "translateY(0)", opacity:"100%"}
                },
                fadeIn: {
                    "0":{opacity: '0%'},
                    "60%": {opacity: '0%'},
                    "100%": {opacity: '100%'}
                },

                comeInFromRight: {
                    "0%": {transform: "translateX(100%)"},
                    "0": {transform: "translateX(0)"}
                },

                comeInFromLeft: {
                    "0%": {transform: "translateX(-100%)"},
                    "0": {transform: "translateX(0)"}
                }
            }
        }
    }
    }