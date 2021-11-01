import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { LineChart, Grid, YAxis } from "react-native-svg-charts";

const { width, height } = Dimensions.get('window');

type GradeChartProps = {
    data: number[],
    stroke?: any,
}

const GradeChart : React.FC<GradeChartProps> = ({ data = [], stroke }) => {
    const { colors, theme  } : any = useTheme();

    return  (
        <View style={styles.graphContainer}>
            <View style={[ styles.graph, { backgroundColor: theme.secondary } ]}>
                <YAxis
                    data={data}
                    contentInset={{ top: 20, bottom: 20 }}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={5}
                    formatLabel={(value) => `${value}%`}
                />
                <LineChart
                    style={{ height: 300, width: width * 0.8 }}
                    data={data}
                    svg={{ 
                        stroke: stroke || colors.primary, 
                        strokeWidth: 3
                    }}
                    contentInset={{ top: 20, bottom: 20, left: 5, right: 5, }}
                >
                    <Grid />
                </LineChart>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    graphContainer: {
        width: width * 0.9,
        height: 315,
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "row",
    },
    graph: {
        width: width * 0.9,
        height: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        zIndex: 1,
        backgroundColor: "#fff",
        shadowColor: 'rgba(0, 0, 0, 0.35)',
        shadowOpacity: 0.35,
        borderRadius: 5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 0 }
    }
});

export default GradeChart; 