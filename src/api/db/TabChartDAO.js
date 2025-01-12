const tabCharts = []; 

class TabChartDAO {
    static addTabChart(tabChart) {
        tabCharts.push(tabChart);
        return tabChart;
    }

    static getTabCharts() {
        return tabCharts;
    }

    static getTabChartById(id) {
        return tabCharts.find(chart => chart.id === id);
    }
}

module.exports = TabChartDAO;
