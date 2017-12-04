---
order: 1
title: 市选择
---

```jsx
import { CitySelectField } from 'saltui';

// 部分省市区数据，为了展示方便，写在了文件内
const districtData = [{ label: '北京', value: '110000', children: [{ label: '北京市', value: '110100', children: [{ label: '东城区', value: '110101' }, { label: '西城区', value: '110102' }, { label: '崇文区', value: '110103' }, { label: '宣武区', value: '110104' }, { label: '朝阳区', value: '110105' }, { label: '丰台区', value: '110106' }, { label: '石景山区', value: '110107' }, { label: '海淀区', value: '110108' }, { label: '门头沟区', value: '110109' }, { label: '房山区', value: '110111' }, { label: '通州区', value: '110112' }, { label: '顺义区', value: '110113' }, { label: '昌平区', value: '110114' }, { label: '大兴区', value: '110115' }, { label: '怀柔区', value: '110116' }, { label: '平谷区', value: '110117' }, { label: '密云县', value: '110228' }, { label: '延庆县', value: '110229' }, { label: '其它区', value: '110230' }] }] }, { label: '浙江省', value: '330000', children: [{ label: '杭州市', value: '330100', children: [{ label: '上城区', value: '330102' }, { label: '下城区', value: '330103' }, { label: '江干区', value: '330104' }, { label: '拱墅区', value: '330105' }, { label: '西湖区', value: '330106' }, { label: '滨江区', value: '330108' }, { label: '萧山区', value: '330109' }, { label: '余杭区', value: '330110' }, { label: '桐庐县', value: '330122' }, { label: '淳安县', value: '330127' }, { label: '建德市', value: '330182' }, { label: '富阳市', value: '330183' }, { label: '临安市', value: '330185' }, { label: '其它区', value: '330186' }] }, { label: '宁波市', value: '330200', children: [{ label: '海曙区', value: '330203' }, { label: '江东区', value: '330204' }, { label: '江北区', value: '330205' }, { label: '北仑区', value: '330206' }, { label: '镇海区', value: '330211' }, { label: '鄞州区', value: '330212' }, { label: '象山县', value: '330225' }, { label: '宁海县', value: '330226' }, { label: '余姚市', value: '330281' }, { label: '慈溪市', value: '330282' }, { label: '奉化市', value: '330283' }, { label: '其它区', value: '330284' }] }, { label: '温州市', value: '330300', children: [{ label: '鹿城区', value: '330302' }, { label: '龙湾区', value: '330303' }, { label: '瓯海区', value: '330304' }, { label: '洞头县', value: '330322' }, { label: '永嘉县', value: '330324' }, { label: '平阳县', value: '330326' }, { label: '苍南县', value: '330327' }, { label: '文成县', value: '330328' }, { label: '泰顺县', value: '330329' }, { label: '瑞安市', value: '330381' }, { label: '乐清市', value: '330382' }, { label: '其它区', value: '330383' }] }] }, { label: '海南省', value: '460000', children: [{ label: '海口市', value: '460100', children: [{ label: '秀英区', value: '460105' }, { label: '龙华区', value: '460106' }, { label: '琼山区', value: '460107' }, { label: '美兰区', value: '460108' }, { label: '其它区', value: '460109' }] }, { label: '三亚市', value: '460200' }, { label: '三沙市', value: '460300', children: [{ label: '西沙群岛', value: '460321' }, { label: '南沙群岛', value: '460322' }, { label: '中沙群岛的岛礁及其海域', value: '460323' }] }] }, { label: '香港特别行政区', value: '810000', children: [{ label: '香港岛', value: '810100', children: [{ label: '中西区', value: '810101' }, { label: '湾仔', value: '810102' }, { label: '东区', value: '810103' }, { label: '南区', value: '810104' }] }, { label: '九龙', value: '810200', children: [{ label: '九龙城区', value: '810201' }, { label: '油尖旺区', value: '810202' }, { label: '深水埗区', value: '810203' }, { label: '黄大仙区', value: '810204' }, { label: '观塘区', value: '810205' }] }, { label: '新界', value: '810300', children: [{ label: '北区', value: '810301' }, { label: '大埔区', value: '810302' }, { label: '沙田区', value: '810303' }, { label: '西贡区', value: '810304' }, { label: '元朗区', value: '810305' }, { label: '屯门区', value: '810306' }, { label: '荃湾区', value: '810307' }, { label: '葵青区', value: '810308' }, { label: '离岛区', value: '810309' }] }] }, { label: '澳门特别行政区', value: '820000', children: [{ label: '澳门半岛', value: '820100' }, { label: '离岛', value: '820200' }] }, { label: '海外', value: '990000', children: [{ label: '海外', value: '990100' }] }];

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  render() {
    return (
      <div>
        <CitySelectField
          // value={['110000', '110100']}
          layout="v"
          selectorType="city"
          label="市选择"
          placeholder="请选择"
          required
          confirmText="确认"
          cancelText="取消"
          provinceText="省"
          cityText="市"
          districtText="区"
          // readOnly
          districtData={districtData}
        // onSelect={value => this.setState({ value })}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />, mountNode
);
```