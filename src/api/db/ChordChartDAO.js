const chordCharts = []; 

class ChordChartDAO {
    static addChordChart(chordChart) {
        chordCharts.push(chordChart);
        return chordChart;
    }

    static getChordCharts() {
        return chordCharts;
    }

    static getChordChartById(id) {
        return chordCharts.find(chart => chart.id === id);
    }
}

module.exports = ChordChartDAO;
