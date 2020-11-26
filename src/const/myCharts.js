import echarts from 'echarts';
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    // 画一条简单的线
                    line1: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            xAxis: {
                                type: 'category',
                                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                            },
                            yAxis: {
                                type: 'value',
                            },
                            series: [{
                                data: [1820, 932, 901, 934, 1290, 1330, 1320],
                                type: 'line',
                                smooth: true,
                            },
                            {
                                data: [1200, 292, 901, 934, 1290, 230, 3020],
                                type: 'line',
                                smooth: true,
                            },
                        ],
                        };

                        this.chart.setOption(optionData);
                    },
                };
            },
        },
    });
};

// const a = { install, install2 };
export default install;
