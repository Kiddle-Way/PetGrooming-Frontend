import React, { useState } from "react";

const Popup = ({ onAgree }) => {
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const handlePopup1 = () => {
    const popup = window.open("", "_blank", "width=500,height=300");
    popup.document.write(`
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>서비스 이용 약관</title>
      </head>
      <body>
        <h3>서비스 이용 약관</h3>
        <p>제1장 [총칙] 제1장 [목적] 본 약관은 주식회사 펫그루밍(이하
          ‘회사’라 한다)가 제공하는 “펫그루밍미용샵 서비스”(이하 ‘서비스’라
          한다)의 이용과 관련하여 회사와 이용자간 권리, 의무 및 책임사항,
          기타 필요한 사항을 규정함을 목적으로 합니다. 제2조 [정의] ①
          “회사”는 모바일 애플리케이션 및 모바일 웹을 통해 이용자와 판매자
          간에 온라인 거래장소를 제공하여, 이용자가 판매자의 매장에서
          판매자의 상품 및 원하는 메뉴를 골라 사전 예약 및 사전 결제할 수
          있도록 통신판매 중개 서비스를 제공하는 주식회사 펫그루밍을
          말합니다. ② “서비스”는 회사가 운영하는 모바일 애플리케이션 및
          모바일 웹 서비스를 통해 제공되는 중개서비스와 이용자에게 제공되는
          제반 기능을 말합니다. ③ “펫그루밍미용샵”은 회사가 이용자와 판매자
          간에 판매자의 재화 및 상품을 거래할 수 있도록 설정하여 제공하는
          가상의 영업장 또는 온라인 거래장소를 말합니다. ④ “이용자”는 회사의
          서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가
          제공하는 서비스를 이용하는 고객을 말하며, 이용자의 자격 및 권한
          등은 별도로 관리합니다. ⑤ “판매자”는 회사가 제공하는 서비스를
          이용해 재화 및 상품에 관한 정보를 게재하고 판매하는 주체를
          말합니다. ⑥ “판매자 매장”은 판매자의 상표, 상호를 사용하여
          대한민국 내에서 운영하는 영업장으로서 판매자가 직접 운영하는
          사업장을 칭합니다. ⑦ “사이트”는 회사가 제공하는
          서비스(펫그루밍미용샵)를 이용할 수 있는 모바일 애플리케이션 및 웹
          상의 온라인 페이지를 말합니다. ⑧ “상품”은 판매자가 이용자에게
          판매하는 재화와 용역으로서 모든 상품을 말합니다. ⑨ “게시물”은
          이용자가 서비스를 이용함에 있어 서비스에 게시한
          부호・문자・음성・음향・화상・동영상 등의 정보 형태의 글, 사진,
          동영상 및 각종 파일과 링크 등을 말합니다. ⑩ 본 약관에서 사용되는
          용어 중 본 조에서 정하지 아니한 사항은 일반 상・관례 및 관련
          법령에서 정하는 바에 따릅니다. 제3조 [약관의 효력 및 개정] ① 본
          약관의 내용은 서비스 초기 화면에 게시되거나 기타 방법으로
          이용자에게 공시되며, 시행일(약관을 변경하는 경우 변경 내용이
          적용되는 날)로부터 효력이 발생합니다. ② 회사는 “약관의 규제에 관한
          법률”, “정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하
          ‘정보통신망법’이라 한다)”, “개인정보보호법”, “소비자보호법”,
          “전자상거래 등에서의 소비자보호에 관한 법률(이하
          ‘전자상거래법’이라 한다.)” 등 관련 법령에 위배되지 않는 범위에서
          본 약관을 개정할 수 있습니다. ③ 회사가 약관을 개정할 경우에는
          적용일자 및 개정 사유를 명시하여 현행 약관과 함께 제 1 항의 방식에
          따라 그 개정 약관의 적용일자 7일 전부터 적용일자 전일까지
          공지합니다. 다만, 이용자에게 불리하게 약관 내용을 변경하는
          경우에는 적용일자 30일 전부터 개정 전 내용과 개정 후 내용을
          명확하게 비교하여 이용자가 알기 쉽도록 적용일자 전까지 공시합니다.
          필요 시 이용자가 카카오계정으로 사용하는 이메일 주소로의 이메일
          발송 또는 카카오톡 메시지 또는 핸드폰 SMS발송 등 합리적으로 가능한
          방법으로 이용자에게 개별 통지합니다. ④ 이용자는 변경된 약관에
          동의하지 않을 권리가 있으며, 변경된 약관에 동의하지 않을 경우에는
          서비스 이용을 중단하고 탈퇴를 요청할 수 있습니다. 다만, 이용자가
          제 3항의 방법 등으로 회사가 별도 고지한 약관 개정 공지 기간 내에
          회사에 개정 약관에 동의하지 않는다는 명시적인 의사표시를 하지 않는
          경우 변경된 약관에 동의한 것으로 간주합니다. ⑤ 개정된 약관의
          조항은 개정 약관의 적용일자 이후에 체결된 계약에 한하여 적용되는
          것을 원칙으로 합니다. 다만, 회사가 지정하는 방식에 따라 이용자가
          동의를 한 경우에는 동의한 시점부터 개정된 약관의 조항이
          적용됩니다. 제4조 [약관의 해석] ① 회사는 개별 서비스에 대해서
          별도의 이용약관 및 정책을 둘 수 있습니다. 개별 서비스의 제공에
          관하여는 해당 이용약관 및 정책이 우선하여 적용되며, 본 약관은 개별
          이용약관 및 정책에 반하지 않는 범위 내에서 개별 서비스에 관하여도
          적용됩니다. ② 개별 서비스에 관한 별도 이용약관 및 정책 또는 본
          약관에 명시되지 않은 사항에 대해서는 대한민국 법률 및
          정보통신망법, 개인정보보호법, 소비자보호법 등 관련 법령이 있는
          경우 이에 따르고 그렇지 아니한 경우 상・관례에 따릅니다. 제2장
          서비스 이용 계약 제5조[이용계약의 성립] ① 이용계약은 이용자가
          회사가 정한 절차에 따라 약관의 내용에 동의를 하고, 정보를 기입한
          후 가입신청을 하고, 회사가 이런 신청에 대하여 승낙하여 회원가입
          절차가 완료됨으로써 체결됩니다. ② 본 조 제 1 항에 따른 신청에 있어
          회사는 이용자에게 전문기관을 통한 실명확인 및 본인인증을 요청할 수
          있습니다. ③ 회사는 이용자의 가입신청에 대하여 서비스 이용을
          승낙함을 원칙으로 합니다. 다만, 회사는 다음 각 호에 해당하는
          신청에 대하여는 승낙을 하지 않거나 사후에 이용계약을 해지할 수
          있습니다. 1. 이용자가 본 약관에 의해 이전에 자격을 상실한 적이
          있는 경우. 단, 자격 상실 후 3년이 경과한 이용자로 회사의 재가입
          승낙을 얻은 경우에는 예외로 함 2. 신청자가 신청일 현재 만 14세
          미만인 경우 3. 가입 필수 기재사항의 내용에 허위, 기재 누락, 오기가
          있는 경우 4. 타인의 명의를 이용하여 신청하는 경우 5. 이용자가
          실명확인 및 본인인증 절차를 통해 확인했을 때 이용자의 정보가 사실
          아님이 확인된 경우 6. 이용자로 등록하는 것이 회사의 기술상 현저히
          지장이 있다고 판단되는 경우 7. 부정한 용도 또는 영리를 추구할
          목적으로 본 서비스를 이용하고자 하는 경우 8. 사회의 안녕질서 또는
          미풍양속을 저해하거나 저해할 목적으로 신청한 경우 9. 기술상 서비스
          제공이 불가능한 경우 10. 이용자의 귀책사유로 인하여 승인이
          불가능한 경우 11. 기타 규정한 제반 사항을 위반하거나 회사가 정한
          이용 신청 요건이 만족되지 않았을 경우 ④ 회사는 서비스 관련 설비의
          여유가 없거나, 기술상 또는 업무상 문제가 있어 정상적인 서비스
          제공이 어렵다고 판단되는 경우에는 승낙을 유보할 수 있으며, 가입
          신청을 승낙하지 않거나 유보한 경우 회사는 이용자에게 알리도록
          합니다. ⑤ 이용계약의 성립 시기는 회사가 가입 완료를 신청절차
          상에서 표시하거나, 본 약관의 통지 방식에 따라 통지 결과가
          이용자에게 도달한 시점으로 합니다. ⑥ 회사는 이용자에 대해 회사
          정책에 따라 등급별로 구분하여 서비스 메뉴 등을 세분하여 이용에
          차등을 둘 수 있습니다. 제6조 [정보의 변경] ① 이용자는 정보관리
          화면을 통해 언제든지 개인의 정보를 열람 및 수정할 수 있으며, 직접
          수정이 불가능한 사항에 대해서는 회사가 정한 방법으로 정해진 양식
          및 방법에 의하여 수정을 요청할 수 있습니다. ② 이용자는 이용 신청
          시 기재한 사항이 변경되었을 경우, 개인의 정보를 직접 수정하거나
          회사가 정한 방법으로 정해진 양식 및 방법에 의하여 수정하여 최신의
          상태를 유지해야 합니다. ③ 이용자 정보의 변경사항을 회사에 알리지
          않아 발생한 불이익에 대하여 회사는 회사의 고의 또는 중대한 과실이
          없는 이상 책임지지 않습니다. 제3장 서비스 이용 제7조 [서비스 이용
          개시] ① 회사는 이용자의 이용 신청을 승낙한 때부터 서비스를
          개시합니다. 단, 일부 서비스의 경우에는 지정된 일자부터 서비스를
          개시합니다. ② 회사의 업무상 또는 기술상의 장애로 인하여 서비스를
          개시하지 못하는 경우에는 사이트에 공시하거나 이용자에게 이를
          통지합니다. 제8조 [서비스의 제공 등] ① 서비스는 연중무휴, 1일
          24시간 제공함을 원칙으로 합니다. ② 본 조 1항에도 불구하고 회사는
          서비스를 일정 범위로 분할하여 각 범위별로 이용가능시간을 별도로
          지정할 수 있습니다. 다만, 이러한 경우에는 그 내용을 사전에
          공지합니다. ③ 회사는 회사의 업무상이나 기술상(컴퓨터 등
          정보통신설비의 보수 점검, 교체 및 고장, 장애, 통신두절 또는 운영상
          상당히 필요한 경우)의 이유가 있는 경우 서비스의 제공을 일시적으로
          중단할 수 있습니다. 이 경우 회사는 이용자에게 정한 방법으로
          통지합니다. 다만, 회사가 사전에 통지할 수 없는 부득이한 사유가
          있는 경우 사후에 통지할 수 있습니다. ④ 회사는 본 조 제 3 항에 따른
          서비스 제공 중단으로 발생한 이용자의 손해에 대하여 회사의 고의
          또는 중대한 과실이 없는 한 책임을 지지 않습니다. ⑤ 회사는 서비스의
          제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검 시간은
          서비스 제공 화면에 공지한 바에 따릅니다. 제9조 [서비스의 변경 및
          중지] ① 회사는 안정적인 서비스 제공을 위한 상당한 이유가 있는
          경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부
          서비스를 변경할 수 있습니다. ② 회사는 변경될 서비스의 내용 및 제공
          일자를 회사가 정한 방법으로 이용자에게 통지하고, 서비스를 변경하여
          제공할 수 있습니다. ③ 회사는 다음 각 호에 해당하는 경우, 서비스의
          전부 또는 일부를 제한하거나 중지 또는 종료할 수 있습니다. 1.
          서비스 제공을 위한 정보통신설비의 보수점검 등 공사로 인한 부득이한
          경우 2. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인
          서비스 이용에 지장이 있는 경우 3. 서비스 제공에 필요한 판매자 또는
          제3자와의 계약 종료 등과 같은 회사의 제반 사정으로 서비스를 유지할
          수 없는 경우 4) 기타 천재지변, 국가비상사태 등 불가항력적 사유가
          있는 경우 ④ 본 조 제 1 항과 제 3 항에 의한 서비스 중단의 경우,
          회사가 정한 방법으로 이용자에게 통지합니다. 다만, 회사가 통제할 수
          없는 사유로 인한 서비스의 중단(운영자의 고의, 과실이 없는 장애,
          시스템 다운 등)으로 인하여 사전 통지가 불가능한 경우에는 그러하지
          아니합니다. ⑤ 본 조 제 1 항과 제 3 항에 의한 서비스 중단으로
          회사가 정한 방법으로 이용자에게 통지한 후 이용자의 동의를 얻고자
          일정기간 동의 독려를 했음에도 불구하고, 이용자가 기간 내 통지에
          대해 의사 표현이 없을 경우 회사는 서비스의 전부 또는 일부를
          제한하거나 중지할 수 있습니다. ⑥ 회사는 서비스의 변경, 중지로
          발생하는 문제에 대해서는 어떠한 책임도 지지 않습니다. ⑦ 회사는
          무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및 운영의
          필요상 수정, 중지, 변경할 수 있으며, 이에 대하여 관련 법에 특별한
          규정이 없는 한 이용자에게 별도의 보상을 하지 않습니다.
          제10조[정보의 제공 및 광고의 게재] ① 회사는 이용자가 서비스 이용
          중 필요하다고 인정되는 다양한 정보를 공지사항이나 이메일 등의
          방법으로 제공할 수 있습니다. 다만, 관련 법에 따른 거래 관련 정보
          및 고객 문의 등에 대한 답변 등을 제외하고는 언제든지 이메일에
          대해서 수신 거절을 할 수 있습니다. ② 회사는 마케팅 목적의 정보를
          전화, 문자, 알림톡, 이메일 등을 통해 전송하려고 하는 경우에는
          이용자의 사전 동의를 받은 다음 전송해야 합니다. 다만, 서비스와
          관련한 거래관련 정보 및 고객문의, 서비스 운영에 대한 회신에
          있어서는 제외됩니다. ③ 회사는 서비스의 운영과 관련하여 서비스
          화면, 홈페이지, 이메일 등에 광고를 게재할 수 있습니다. 광고가
          게재된 이메일을 수신한 이용자는 수신거부를 회사에 할 수 있습니다.
          ④ 이용자는 회사가 제공하는 서비스와 관련하여 게시물 또는 기타
          정보를 변경, 수정, 제한하는 등의 조치를 취하지 않습니다. 제11조
          [게시물 또는 내용물의 관리] ① 이용자가 서비스에 게시한 게시물에
          저작물이 포함되어 있는 경우 해당 저작물의 저작권 및 지적재산권은
          회사에 귀속됩니다. 단, 이용자의 게시물 및 제휴계약에 따라 제공된
          저작물 등은 제외합니다. ② 이용자는 서비스에 게시한 게시물이 타인의
          저작권 등 권리를 침해하지 않도록 주의하여야 하고, 제 3 자가
          게시물이 자신의 권리를 침해한다며 분쟁을 제기하는 경우 이용자는
          본인의 책임과 비용으로 해당 분쟁을 해결하며 회사를 면책하여야
          합니다. ③ 이용자가 서비스에 게시하는 게시물은 서비스 및 관련
          프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위
          내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우
          회사는 관련 법 규정을 준수하며, 이용자는 언제든지
          고객센터(1644-0579) 또는 서비스 내 관리 기능을 통해 해당 게시물에
          대해 삭제, 비공개 등의 조치를 취할 수 있습니다. ④ 이용자는 이
          이용약관으로 인하여 서비스를 소유하거나 서비스에 관한 저작권을
          보유하게 되는 것이 아니라 회사로부터 서비스의 이용을 허락받게 되는
          바 정보취득 또는 개인용도로만 서비스를 이용할 수 있습니다. ⑤
          이용자의 게시물이 관련 법(“정보통신망법” 및 “저작권법” 등)에
          위반되는 내용을 포함하는 경우, 회사는 관련 법이 정한 절차에 따라
          해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 요청이
          반영되지 않을 경우 관련법에 따라 회사가 직접 해당 게시물에 대해
          임시조치 등을 취할 수 있습니다. ⑥ 회사는 이용자가 작성한 게시물이
          다음 각 호에 해당하는 경우 사전 통지 없이 해당 게시물을
          삭제하거나, 열람을 제한하는 등의 조치를 취할 수 있습니다. 1)
          타인의 권리나 명예, 신용 기타 정당한 이익을 침해하거나 심한 모욕을
          주는 경우 2) 공공질서 및 미풍양속에 위반되는 내용일 경우 3)
          범죄행위와 관련된 내용을 포함하는 경우 4) 회사의 저작권, 제 3자의
          저작권 등 기타 권리를 침해하는 내용인 경우 5) 불법 게시물, 음란물
          또는 청소년 유해매체물의 게시, 광고, 사이트를 링크하는 경우 6)
          회사로부터 사전 승인 받지 아니한 상업광고, 판촉 내용을 게시하거나
          타 사이트의 링크를 게시하는 경우 7) 상품 등과 관련 없는 내용인
          경우 8) 허위 사실을 마치 진실인 것처럼 기재하여 회사나 판매자의
          업무를 방해하거나 회사의 사실관계 확인 요청에 2회 이상 불응한 경우
          9) 판매자의 매장을 홍보할 목적으로 직접 또는 제3자(리뷰대행업체
          등)을 통하여 위법 부당한 방법으로 허위 또는 과장된 내용을 기재하는
          경우 10) 허위 예약 또는 예약 취소 등 위법 부당한 방법으로 리뷰
          권한을 획득하여 이용자 또는 제 3자의 계정을 이용하여 게시글을
          게시하는 경우 11) 의미 없는 문자 및 부호에 해당하는 경우 12) 제
          3자 등으로부터 권리침해신고가 접수된 경우 13) 회사가 제공하는
          서비스 기타 영업 행위의 원활한 진행을 방해하는 것으로 판단되는
          경우 14) 기타 본 약관 또는 기타 관련 법령 및 회사의 규정 등에
          위반된다고 판단되는 경우 ⑦ 이용자는 회사가 서비스를 통해
          이용자에게 제공하는 각종 자료 및 서비스 등에 대한 일체의 내용을
          제3자에게 제공하거나 외부에 유출할 수 없으며, 임의로
          수정・편집・가공할 수 없습니다. ⑧ 이용자의 게시물 및 제휴 계약에
          의해 제공된 저작물을 제외한 서비스의 제공과 관련하여 발생한 저작물
          등 일체의 유・무형 결과물에 대한 저작권 등 지적재산권은 회사에
          귀속됩니다. ⑨ 회사는 게시물 또는 서비스 내의 모든 내용물에 대한
          관리 세부 절차는 관련 법이 규정한 범위 및 회사가 정한 서비스
          규정에 따라 각종 게시물을 등록하거나 삭제하여야 합니다. ⑩ 본 조 제
          6 항에 해당하는 게시물로 인하여 법률상 이익이 침해된 자는 관련
          법령이 정한 절차에 따라 회사에 해당 게시물의 게시중단 및 삭제 등을
          요청할 수 있으며, 회사는 관련 법령 및 회사의 정책에 따라 조치를
          취하여야 합니다 ⑪ 서비스에 게시된 게시물로 인하여 회사가 제3자에
          대하여 손해배상금을 지급하게 되는 경우(조정, 판결, 민사, 형사
          불문) 귀책사유가 있는 이용자는 회사가 제3자에게 배상금을 지급하는
          즉시 동일 금액 상당을 회사에게 지급하여야 합니다. 제12조 [게시물의
          저작권 및 배타적 이용허락] ① 이용자가 서비스 내에서 작성한
          게시물의 저작권은 이를 작성한 이용자 본인에게 있으며, 해당
          게시물이 타인의 저작권을 침해하는 경우 그에 대한 책임은 이용자
          본인이 부담합니다. ② 이용자는 자신이 창작, 게시한 게시물에 대하여
          회사가 서비스를 운영, 전시, 전송, 배포 또는 홍보하기 위한 목적으로
          비독점적 사용권을 회사에게 부여합니다. 사용권은 다음과 같고,
          사용권 부여는 회사가 서비스를 운영하는 동안 유효하며, 회원의 탈퇴
          후에도 유효합니다. 1. 서비스 내에서 회원 게시물의 복제, 수정,
          개조, 전시, 전송, 배포, 출판 및 2차 저작물과 편집 저작물 작성 2.
          회사에서 제공하는 관련 서비스 내에서 회원 게시물의 복제, 수정,
          개조, 전시, 배포, 출판 및 2차 저작물과 편집 저작물 작성 ③ 회사는
          게시물을 이용할 때 저작권법을 준수하며 이용자는 언제든지 서비스
          고객센터(1644-0579)를 통해 게시물 삭제, 비공개 등의 조치를 취할 수
          있습니다. 제13조 [권리의 귀속] ① 서비스에 대한 저작권 및
          지적재산권은 회사에 귀속됩니다. 단, 이용자의 게시물 및 제휴계약에
          따라 제공된 저작물 등은 제외합니다. ② 회사가 제공하는 서비스의
          디자인, 회사가 만든 텍스트, 스크립트, 그래픽, 이용자 상호간 전송
          기능 등 회사가 제공하는 서비스에 관련된 모든 상표, 서비스 마크,
          로고, 등에 관한 저작권 기타 지적재산권은 대한민국 및 외국의 법령에
          기하여 회사가 보유하고 있거나 회사에게 소유권 또는 사용권이
          있습니다. ③ 이용자는 이 이용약관으로 인하여 서비스를 소유하거나
          서비스에 관한 저작권을 보유하게 되는 것이 아니라 회사로부터
          서비스의 이용을 허락받게 되는 바 정보취득 또는 개인용도로만
          서비스를 이용할 수 있습니다. ④ 이용자는 명시적으로 허락된 내용을
          제외하고는 서비스를 통해 얻어지는 정보를 영리 목적으로 사용, 복사,
          유통하는 것을 포함하여 회사가 만든 텍스트, 스크립트, 그래픽의
          이용자 상호간 전송기능 등을 복사하거나 유통할 수 없습니다. ⑤
          회사는 서비스와 관련하여 이용자에게 회사가 정한 이용조건에 따라
          계정, 콘텐츠 등을 이용할 수 있는 이용권만 부여하며, 이용자는
          회사를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신,
          출판, 배포, 방송 등 기타 방법에 의하여 영리 목적으로 이용하거나 제
          3자에게 이용, 양도, 판매, 담보목적으로 제공하여서는 안됩니다.
          제14조 [계약해지 및 이용제한] ① 이용자는 언제든지 온라인을 통해
          직접 또는 고객센터를 통하여 탈퇴 신청을 할 수 있으며, 회사는 관련
          법 등이 정하는 바에 따라 이를 즉시 처리합니다. ② 이용자가 탈퇴를
          요청할 경우, 관련 법 및 개인정보처리방침에 따라 회사가 회원정보를
          보유하는 경우를 제외하고는 탈퇴 즉시 회원의 모든 데이터는
          소멸됩니다. 단, 이용자가 작성한 게시물은 삭제되지 않으나, 회사가
          언제든지 탈퇴한 이용자의 게시물을 삭제할 수 있습니다. ③ 회사는
          이용자가 규정한 이용자의 의무를 이행하지 않을 경우, 서비스의
          정상적인 운영을 방해한 경우, 서비스 이용을 경고・일시정지・영구
          이용정지 등의 단계적으로 제한을 둘 수 있습니다. ④ 회사는 관련 법에
          따라 명의도용 등의 관련 법을 위반한 경우에는 즉시 영구 이용정지를
          할 수 있으며, 영구 이용정지 시 서비스 이용을 통해 획득한 기타 혜택
          등 관련 사항은 모두 소멸되며, 회사는 회사의 고의 또는 중대한
          과실이 없는 한 이에 대해 별도로 보상하지 않습니다. ⑤ 회사는 가입
          후 서비스 사용 이력이 1년 동안 없는 이용자에 대해 서비스 이용에
          대한 의사가 없는 것으로 판단하고 회사가 정한 정책에 의해 해당
          계정에 대한 별도 관리를 할 수 있습니다. 단, 회사가 정한 정책에
          따라 이용자가 서비스 이용 의사가 있을 경우 일시정지 상태로 유지할
          수 있습니다. ⑥ 본 조의 이용제한 범위 내에서 제한의 조건 및
          세부내용은 이용제한 정책 및 운영정책에서 정하는 바에 의합니다. ⑦
          회사는 본 조에 따라 서비스 이용을 제한하거나 탈퇴하는 경우 본
          약관에서 정한 방법으로 처리과정 및 결과를 통지합니다. ⑧ 이용자는
          본 조에 따른 탈퇴 및 이용제한 등에 대하여 이의가 있을 경우 회사가
          정한 절차에 따라 이의신청을 할 수 있습니다. 이의가 정당하다고
          회사가 인정하는 경우, 회사는 이용자가 서비스를 이용할 수 있도록
          즉시 조치를 취하여야 합니다. ⑨ 회사와 이용자간에 해지가
          발생하더라도 해지 이전에 기 체결된 이용자와 판매자 간의 상품 등
          거래 계약의 완결에 관하여는 본 약관에 의해 적용됩니다. 제15조
          [쿠폰] ① 쿠폰은 이용자에게 무상으로 발행되는 것으로 회사는
          이용자가 쿠폰을 서비스에서 상품 구매 시 적용할 수 있도록 그
          사용대상, 사용방법, 사용기간, 할인금액 등을 정할 수 있습니다.
          쿠폰의 종류 또는 내용은 '회사'의 정책에 따라 달라질 수 있습니다. ②
          회사는 쿠폰의 사용대상, 사용방법, 사용기간, 할인금액 등을 사이트에
          별도로 표시하거나 통지합니다. ③ 쿠폰은 현금으로 환급될 수 없으며,
          쿠폰의 사용기간이 만료되거나 구매 취소 시 또는 이용계약이 종료되면
          소멸됩니다. ④ 이용자는 쿠폰을 제 3자에게 또는 다른 아이디로 양도할
          수 없으며 유상으로 거래하거나 현금으로 전환할 수 없습니다. ⑤
          회사는 이용자가 회사가 승인하지 않은 방법으로 쿠폰을 획득하거나
          부정한 목적이나 용도로 쿠폰을 사용하는 경우 쿠폰 사용을 제한 또는
          쿠폰을 사용한 구매 신청을 취소하거나 이용자 자격을 정지할 수
          있습니다. ⑥ 이용자 탈퇴 시 회사로부터 발급받은 쿠폰 중 미사용한
          쿠폰은 즉시 소멸되며 탈퇴 후 재가입하더라도 소멸된 쿠폰은 복구되지
          않습니다. 제16조 [예약 및 결제] ① 서비스 내 판매자가 게시한 상품
          등에 이용자가 예약 및 결제와 같은 승낙의 의사표시를 함으로써
          판매자와 이용자 사이에 상품 등에 관한 계약이 성립합니다. ② 서비스
          내 상품 등의 결제는 카카오페이, 신용카드, 휴대폰 소액결제 등
          회사가 정한 결제 수단으로 할 수 있으며, 결제 가능한 수단은 결제
          화면에 표시합니다. ③ 회사가 판매자 등 제3자에게 이용자의
          개인정보를 제공할 필요가 있는 경우 개인정보를 제공받는 자,
          개인정보를 제공받는 자의 개인정보 이용목적, 제공하는 개인정보의
          항목, 개인정보를 제공받는 자의 개인정보 보유 및 이용기간을
          이용자에게 알리고 동의를 받습니다. ④ 회사가 제 3 자에게 이용자의
          개인정보를 처리할 수 있도록 업무를 위탁하는 경우에는 개인정보
          처리위탁을 받는 자, 개인정보 처리위탁을 하는 업무 내용을
          이용자에게 알리고 동의를 받습니다. 다만, 개별 동의를 받기 어려울
          경우 “정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하
          ‘정보통신망법’이라 한다)”, “개인정보보호법”, “소비자보호법”,
          “전자상거래 등에서의 소비자보호에 관한 법률(이하
          ‘전자상거래법’이라 한다.)” 등 관련 법령에서 정하고 있는 방법을
          통해 동의절차를 갈음할 수 있습니다. 제17조 [취소 및 환불] ① 회사는
          상품 등의 결제의 취소 및 환불과 관련하여 “전자상거래법” 등 관련
          법령을 준수합니다. ② 이용자는 결제한 상품에 대하여 예약시간 2시간
          이전까지는(예약 시간이 오전 11시인 경우 오전 9시 이전까지를
          의미함) 서비스 내에서 직접 결제를 취소하거나 예약 날짜, 시간을
          변경할 수 있고, 이 경우 취소수수료는 없으나, 이용자는 상품 등의
          내용을 변경할 수는 없습니다. 단, 에스테틱 상품의 경우 판매자가
          별도로 정한 시간에 따라 취소 및 환불 처리 가능 시간이 상이하며,
          판매자에 따라 상담 후 시술 메뉴에 한해 당일 취소가 불가능할 수
          있습니다. 관련 내용은 이용자의 상품 및 결제 화면에 게시됩니다. ③
          다음 각 호의 경우에 이용자는 판매자를 상대로 예약 및 결제 취소,
          예약 변경 등의 요청을 할 수 있고, 이 때 판매자는 특별한 사정이
          없는 한 이용자의 요청에 따라야 합니다. 1. 판매자 매장에서 제공하는
          상품 등이 이용자가 서비스에서 결제한 상품 등의 내용과 현저히
          상이할 경우 (단, 이용자가 시술을 받기 전에 한합니다.) 2. 이용자가
          서비스에서 결제한 상품 등이 이용자의 상태로 인해 시술이 불가능한
          경우 (단, 이용자가 예약 시간 이후에 판매자 매장에 오시는 경우,
          취소수수료가 부과될 수 있습니다.) 3. 판매자 매장의 사정으로
          이용자가 시술을 받지 못 하는 경우 ④ 다음 각 호의 경우에 이용자는
          회사를 상대로 예약 및 결제 취소, 환불을 요청할 수 있고, 이 때
          회사는 이용자의 요청에 따라야 합니다. 1. 이용자가 예약시간 2시간
          이전까지(예약시간이 오전 11시인 경우 오전 9시 이전까지를 의미함)
          서비스 내에서 직접 예약 및 결제를 취소하는 경우 2. 판매자 매장의
          폐업, 서비스 이용중지 등으로 인해 이용자가 시술을 받지 못하는 경우
          ⑤ 취소와 환불은 판매자와 확인 후 처리되며 신용카드 결제 및 핸드폰
          결제는 신용카드 사 및 이동통신사의 환불 기준에 의거하여 처리가
          완료되는데 시일이 소요될 수 있습니다. 제18조 [환불 및 취소수수료]
          ① 회사는 이용자의 취소 요청이 시술 예약시간 2시간 이전인
          경우(예약시간이 오전 11시인 경우 오전 9시 이전까지를 의미함) 결제
          금액 전부를 환불합니다. ② 에스테틱 상품에 대한 서비스를 제외한
          이용자는 다음 각 호의 경우 결제금액의 10%를 취소수수료로서
          부담하여야 하며, 회사는 결제금액에서 취소수수료를 공제한 금액을
          이용자에게 환불합니다. 1. 시술 예약시간 2시간 전 이후(예약시간이
          오전 11시인 경우 오전 9시 1분부터를 의미함) 취소한 경우 2.
          이용자가 예약 및 결제한 판매자 매장에 No-show(미방문)하여 판매자가
          No-show(미방문)처리 한 경우 ③ 에스테틱 상품에 대한 서비스 이용자는
          다음 각 호의 경우 결제제금액의 일부 또는 전액을 취소 수수료로서
          부담하여야 합니다. 1. 시술 취소 및 환불 처리 가능 시간 전 이후
          취소한 경우 10%의 취소 수수료가 발생하며, 회사는 결제금액에서
          취소수수료를 공제한 금액을 이용자에게 환불합니다. 2. 판매자가 정한
          당일 예약 취소가 불가능한 상품의 경우, 예약당일 취소시 결제금액
          전액이 취소 수수료가 되어 환불이 불가하며, 관련 내용은 상품 및
          결제 화면에 게시됩니다. ④ 전 2항의 규정에도 불구하고, 사회통념상
          부득이한 사정으로 인해 이용자가 예약시간 이전까지 결제를 취소하지
          못하거나 판매자 매장에 오지 못하였음을 이용자가 입증하는 경우
          회사는 취소수수료를 적용하지 않고 결제금액 전액을 이용자에게
          환불할 수 있습니다. ⑤ 예약 및 시술완료까지 정상적으로 종료된 경우
          서비스 특성상 이용자의 단순변심으로 인한 환불은 불가하나, 탈색,
          손상 등 시술에 하자 발생 시 이용자는 판매자 매장을 통해 재시술
          혹은 환불을 요청할 수 있습니다. 단, 하자 발생 시 시술일자를
          기준으로 7일 이내 판매자 매장에 요청하거나 불가피한 경우에는 사진
          등 추가 자료를 통하여 해당 하자가 시술일자로부터 7일 이내에
          발생하였다는 점을 입증할 것을 원칙으로 합니다. ⑥ 회사 및 판매자는
          별도의 취소 환불 관련 규정을 정할 수 있으며 이 경우 별도 계약 및
          이용조건상의 취소 및 환불 규정이 우선 적용됩니다. 제4장
          계약당사자의 의무 제19조 [개인정보보호의 의무] ① 회사는 관련
          법령(“정보통신망법” 및 “개인정보보호법” 등)이 정하는 바에 따라
          회원의 개인정보를 보호하기 위해 노력합니다. ② 회사는 회원의 정보를
          서비스 제공을 위한 목적 이외의 용도로 사용하거나 회원의 동의 없이
          제3자에게 제공하지 않습니다. 다만 타 법령에 달리 정함이 있는
          경우에는 예외로 합니다. ③ 회원의 개인정보를 안전하게 처리하기
          위하여 기울이는 노력이나 기타 상세한 사항은 개인정보처리방침에서
          확인하실 수 있습니다. 제20조 [회원에 대한 통지] ① 회사가 이용자에
          대한 통지를 하는 경우 본 약관에 별도 규정이 없는 한 이용자가
          제공한 연락처, 이메일, 서비스 로그인 시 동의 및 팝업창 등의
          수단으로 할 수 있습니다. ② 회사는 이용자 전체에 대한 통지의 경우 7
          일 이상 서비스 내 게시판(공지사항 포함)에 게시함으로써 본 조 제 1
          항의 통지에 갈음할 수 있습니다. ③ 이용자는 회사에 실제로 연락이
          가능한 연락처, 이메일 등의 정보를 제공하고 해당 정보들을 최신으로
          유지하여야 하며 회사의 통지를 확인하여야 합니다. ④ 회사는 불특정
          다수 이용자에 대한 통지의 경우 서비스 내 게시판(공지사항 포함)에
          게시함으로써 개별 통지에 갈음할 수 있습니다. 제21조 [회사의 의무]
          ① 회사는 관련 법과 본 약관이 금지하거나 미풍양속에 반하는 행위를
          하지 않으며, 계속적이고 안정적으로 서비스를 제공하기 위하여 최선을
          다하여 노력합니다. ② 회사는 이용자가 안전하게 서비스를 이용할 수
          있도록 개인정보(신용정보 포함) 보호를 위해 보안시스템을 갖추어야
          하며 개인정보처리방침을 공시하고 준수합니다. ③ 회사는 서비스
          제공을 위해 습득한 이용자의 정보를 동의없이 제3자에게 제공하지
          않습니다. 단, 관련 법령(“정보통신망법” 및 “개인정보보호법” 등)에
          의해 요청이 있을 경우에는 법률의 규정에 따른 적법한 절차에 의해
          처리할 수 있습니다. ④ 회사는 서비스 제공 및 운영을 위해 자동으로
          수집된 정보 및 비식별화 처리된 이용자의 정보를 이용하여 통계작성,
          서비스 개선 등의 용도로 활용할 수 있습니다. ⑤ 회사는 관련
          법령(“정보통신망법” 및 “개인정보보호법” 등)을 준수하며, 서비스를
          운영 관리합니다. ⑥ 회사는 서비스 이용과 관련하여 이용자로부터
          제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리합니다.
          이용자가 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나
          본 약관 내 이용자에게 정한 방법으로 이용자에게 처리과정 및 결과를
          전달할 수 있습니다. 제22조 [이용자의 의무] ① 이용자는 관련 법령,
          본 약관의 규정, 이용안내 및 서비스상에 공지한 주의사항, 회사가
          통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는
          행위를 하여서는 아니됩니다. ② 이용자는 판매자의 상품과 관련하여
          시술 완료 처리, 또는 노쇼(no-show) 처리 등 예약 거래와 관련하여
          회사가 요청한 사항을 이행하지 않아서 발생하는 불이익에 대해서
          회사는 책임지지 않습니다. ③ 이용자는 등록 정보에 변경사항이 발생할
          경우 이를 수정하여야 합니다. 제공한 등록 정보 및 수정한 등록
          정보가 부정확할 경우, 회사의 본 약관에 의하여 이용자의 서비스
          이용을 제한 또는 중지할 수 있습니다. ④ 이용자는 판매자와 상품 등의
          구매 절차에서 분쟁이 발생한 경우 분쟁의 해결을 위하여 성실히
          임하여야 하며, 분쟁 해결 과정에서의 불성실한 태도로 인하여
          판매자와 회사에 발생한 손실 및 손해를 부담하여야 합니다. ⑤ 상품 등
          대금의 결제와 관련하여 이용자가 입력한 정보 및 그 정보의 오기 등과
          관련하여 발생한 책임과 불이익은 이용자가 부담하여야 합니다. 단,
          이용자에게 고의, 과실이 없는 경우에는 그러하지 않습니다. ⑥
          이용자는 회사가 서비스를 안전하게 제공할 수 있도록 회사에
          협조하여야 하며, 회사가 이용자의 본 약관 위반 행위를 발견하여
          이용자에게 해당 위반 행위에 대하여 소명을 요청할 경우 이용자는
          회사의 요청에 적극 응하여야 합니다. 제23조 [계정 관리에 대한
          의무와 책임] ① 이용자는 생성된 이용자의 계정(아이디, 비밀번호
          등)에 관한 관리책임은 이용자에게 있음을 숙지하고 계정 관리를
          철저히 하여야 합니다. ② 회사는 이용자의 계정을 통해 개인정보 유출
          우려가 있거나, 반사회적 또는 미풍양속에 어긋나거나, 회사 및 회사의
          운영자로 오인할 우려가 있는 경우, 해당 계정의 이용을 제한할 수
          있습니다. ③ 이용자는 계정이 도용되거나 제 3 자가 사용하고 있음을
          인지한 경우에는 이를 즉시 회사에 통지하고 회사의 안내가 있는 경우
          그에 따라야 합니다. ④ 본 조 제 3 항의 경우 해당 이용자가 회사에 그
          사실을 통지하지 않거나, 통지한 경우에도 회사의 안내를 따르지 않고
          계정 관리에 대해 관리 소홀, 부정 사용에 의하여 발생하는 모든
          결과에 대한 책임은 이용자에게 있으며, 회사는 회사의 고의 또는
          중대한 과실이 없는 이상 책임지지 않습니다. 제24조 [이용자의
          금지행위] ① 이용자는 서비스를 이용할 때 다음 각 호의 행위를
          하여서는 아니 됩니다. 1. 회사가 제공하는 서비스 이용 방법에 의하지
          아니하고 비정상적인 방법으로 서비스를 이용하거나 시스템에 접근하는
          행위 2. 타인의 명의, 카드정보, 계좌정보 등을 도용하여 회사가
          제공하는 서비스를 이용하는 행위 3. 구매 의사 없이 반복적인 구매
          또는 구매와 취소를 반복하는 행위 4. 다른 오픈마켓이나 인터넷쇼핑몰
          등에 임의로 최저가로 등록하는 등으로 제3의 이용자에게 재판매하기
          위한 목적으로 구매 신청하는 행위 5. 회사가 제공하는 할인 등을
          이용하여 비정상적인 다수의 거래를 체결시킴으로써 회사에 손실을
          발생시키고 공정한 시장 환경 조성에 방해가 되는 행위 6. 이용자가
          회사에 예약 취소 및 환불 처리를 요청한 후 마치 환불 받지 않은 듯한
          태도를 보이며 판매자로부터 상품 등에 대한 시술을 받는 행위 7.
          이용자가 판매자로부터 결제한 상품 등 또는 그에 상응하는 상품 등을
          시술 받은 후 마치 시술 받지 않은 듯한 태도를 보이며 회사에 환불을
          요구하는 행위 8. 회사, 다른 이용자 또는 제3자의 지적재산권 및 기타
          권리의 침해, 명예훼손, 업무 방해 행위 9. 외설 또는 폭력적인
          메세지, 화상, 음성, 기타 공공질서 미풍양속에 반하는 정보를
          서비스에 공개 또는 게시하는 행위 10. 고객센터 상담 내용이 욕설,
          폭언, 성희롱 등에 해당하는 행위 11. 허위 예약, 허위 리뷰작성 등을
          통해 서비스를 부정한 목적으로 이용하는 행위 12. 회사가 게시한
          정보의 무단 변경 또는 회사가 정한 정보 이외의 정보(컴퓨터 프로그램
          등) 등을 송신 또는 게시하는 행위 13. 회사의 정상적인 영업활동 및
          서비스의 원활한 운영을 고의로 방해하는 행위 또는 이를 시도한 행위
          14. 비정상적으로 과다한 트래픽을 유발하는 자료를 게시, 저장하거나
          발송하는 행위 15. 서비스의 이용권한, 기타 이용계약상 자신의 지위를
          타인에게 양도, 증여 또는 담보로 제공하는 행위 16. 본 약관에 명시된
          취소, 환불 규정을 악용하여 판매자 매장 및 회사에 피해를 주거나
          반복적으로 분쟁을 유발하는 행위 17. 기타 본 약관 또는 관련 법령에
          위반되는 불법적이거나 부당한 행위 ② 회사는 이용자가 본 조의 금지
          행위를 행하는 경우 이용자에 대하여 서비스 이용 일시 정지 등 조치를
          취할 수 있습니다. 중한 위반 행위의 경우에는 사전 통지 없이 즉시
          해당 이용자의 서비스 이용 중단 조치를 취할 수 있으며, 본 약관 제
          12조에 따라 이용자와의 서비스 이용 계약을 해지할 수 있습니다. 이
          경우 발생하는 모든 손해에 대한 책임은 이용자가 부담하며, 회사는
          필요한 경우 이용자의 금지 행위 사실을 정부기관 또는 사법기관에
          통지할 수 있습니다. ③ 이용자는 전항의 회사의 서비스 이용 중단
          조치에 대하여 이의신청을 할 수 있고, 이의가 정당하다고 회사가
          인정하는 경우 회사는 즉시 해당 이용자에 대한 서비스의 이용을
          재개합니다. 제5장 손해배상 등 제26조 [손해배상] ① 이용자가 본
          약관의 규정을 위반함으로 인하여 회사에 손해가 발생하게 되는 경우,
          본 약관을 위반한 이용자는 회사에 발생하는 손해를 배상하여야
          합니다. ② 이용자가 서비스를 이용함에 있어 행한 불법행위나 본 약관
          위반행위로 인하여 회사가 제3자로부터 손해배상 청구 또는 소송을
          비롯한 각종 이의제기를 받는 경우 이용자는 자신의 책임과 비용으로
          회사를 면책시켜야 하며, 회사가 면책되지 못한 경우 당 이용자는 그로
          인하여 회사에 발생한 모든 손해를 배상하여야 합니다. ③ 회사는
          서비스와 관련한 이용자의 불만사항이 접수되는 경우, 그러한 손해가
          회사의 고의나 중과실에 기해 발생한 경우에 한하여 책임을 부담하며,
          그 책임의 범위는 통상 손해에 한합니다. 제26조 [손해배상] ① 회사 및
          회사의 임직원 그리고 대리인은 고의 또는 과실이 없는 한 다음과 같은
          사항으로부터 발생하는 손해에 대해서는 책임을 지지 않습니다. 단,
          회사 및 회사의 임직원, 대리인의 고의 또는 중대한 과실이 인정되는
          경우에는 그러하지 아니합니다. 1. 이용자 또는 판매자 정보의 허위
          또는 부정확성에 기인하는 손해 2. 서비스에 대한 접속 및 서비스의
          이용과정에서 제3자의 모든 불법적인 접속 또는 불법적인 이용으로부터
          발생하는 손해 3. 서비스에 대한 접속 및 서비스의 이용과정에서
          제3자의 불법적인 행위를 방지하거나 예방하는 과정에서 발행하는 손해
          4. 제 3자가 서비스를 이용하여 불법적으로 전송, 유포하거나 또는
          전송, 유포되도록 한 모든 바이러스, 스파이웨어 및 기타 악성
          프로그램으로 인한 손해 ② 회사는 판매자와 이용자간의 상품거래를
          중개하는 플랫폼 서비스만을 제공할 뿐 재화 등을 판매하는 당사자가
          아니며 재화 등에 대한 정보 하자 등에 대한 책임은 판매자에게
          있습니다. ③ 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여
          서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이
          면제됩니다. ④ 회사는 이용자의 귀책사유로 인한 서비스 이용 장애에
          대하여는 고의 또는 중과실이 없는 한 책임을 지지 않습니다. ⑤ 회사는
          이용자가 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도 및
          정확성 등 내용에 대하여는 고의 또는 중과실이 없는 한 책임을 지지
          않습니다.</p>
        <button onclick="window.close()">닫기</button>
      </body>
      </html>
    `);
  };

  const handlePopup2 = () => {
    const popup = window.open("", "_blank", "width=500,height=300");
    popup.document.write(`
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>서비스 이용 약관</title>
      </head>
      <body>
        <h3>서비스 이용 약관</h3>
        <p>제 1 장 총칙

        제 1 조 (목적)
        본 약관은 통계청이 운영하는 나라통계시스템 운영홈페이지(이하 "당 사이트")에서 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 당 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
        
        제 2 조 (약관의 효력과 변경)
        ① 당 사이트는 이용자가 본 약관 내용에 동의하는 것을 조건으로 이용자에게 서비스를 제공하며, 당 사이트의 서비스 제공 행위 및 이용자의 서비스 사용 행위에는 본 약관을 우선적으로 적용하겠습니다.
        ② 당 사이트는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된 약관은 당 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 이용자가 변경된 약관에 동의하지 아니하는 경우 본인의 회원등록을 취소(회원탈퇴)할 수 있으며, 계속 사용할 경우에는 약관 변경에 대한 암묵적 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그 효력을 발휘합니다.
        
        제 3 조 (약관 외 준칙)
        본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 기타 관련 법령의 규정에 의합니다.
        
        제 4 조 (용어의 정의)
        ① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
         1. 이용자 : 본 약관에 따라 당 사이트가 제공하는 서비스를 받는 자
         2. 가 입 : 당 사이트가 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위
         3. 회 원 : 당 사이트에 필요한 개인 정보를 제공하여 회원 등록을 한 자로서, 당 사이트의 정보 및 서비스를 이용할 수 있는 자
         4. 아이디 : 이용고객의 식별과 이용자가 서비스 이용을 위하여 이용자가 정한 문자와 숫자의 조합
         5. 비밀번호 : 아이디에 대한 본인 여부를 확인하기 위하여 사용되는 문자, 숫자, 특수문자 등의 조합
         6. 탈퇴 : 서비스 또는 회원이 이용계약을 종료하는 행위
        ② 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및 이용규정에서 정의합니다.
        
        제 2 장 서비스 제공 및 이용
        
        제 5 조 (이용 계약의 성립)
        ① 이용계약은 이용자가 온라인으로 당 사이트에서 제공하는 이용계약 신청서를 작성하여 가입을 완료하는 것으로 성립됩니다.
        ② 당 사이트는 다음 각 호에 해당하는 경우에 가입을 취소할 수 있습니다.
         1. 다른 사람의 명의를 사용하여 신청하였을 때
         2. 이용 계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때
         3. 사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때
         4. 다른 사람의 당 사이트 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때
         5. 당 사이트를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우
         6. 기타 당 사이트가 정한 이용신청요건이 미비 되었을 때
        ③ 당 사이트는 다음 각 호에 해당하는 경우 그 사유가 소멸될 때까지 이용계약 성립을 유보할 수 있습니다.
         1. 서비스 관련 제반 용량이 부족한 경우
         2. 기술상 장애 사유가 있는 경우
        ④ 당 사이트가 제공하는 서비스는 자체 개발하거나 다른 기관과의 협의 등을 통해 제공하는 일체의 서비스를 말하는 것이며, 그 내용을 변경할 경우에는 이용자에게 공지한 후 변경하여 제공할 수 있습니다.
        
        제 6 조 (회원정보 사용에 대한 동의)
        ① 회원의 개인정보는 공공기관의 개인정보보호법에 의해 보호되며 당 사이트의  개인정보처리방침이 적용됩니다.
        ② 당 사이트의 회원 정보는 다음과 같이 수집, 사용, 관리, 보호됩니다.
         1. 개인정보의 수집 : 당 사이트는 회원 가입시 회원이 제공하는 정보를 수집합니다.
         2. 개인정보의 사용 : 당 사이트는 서비스 제공과 관련해서 수집된 회원정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 방송통신심의위원회의 요청이 있는 경우 또는 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우, 회원이 당 사이트에 제공한 개인정보를 스스로 공개한 경우에는 그러하지 않습니다.
         3. 개인정보의 관리 : 회원은 개인정보의 보호 및 관리를 위하여 서비스의 개인정보관리에서 수시로 회원의 개인정보를 수정/삭제할 수 있습니다. 수신되는 정보 중 불필요하다고 생각되는 부분도 변경/조정할 수 있습니다. 개인정보의 이용기간은 이용자가 가입을 완료하고 개인정보관리에서 회원가입을 탈퇴하는 시점이며 보호기간도 동일합니다.
         4. 개인정보의 보호 : 회원의 개인정보는 오직 회원만이 열람/수정/삭제 할 수 있으며, 이는 전적으로 회원의 아이디와 비밀번호에 의해 관리되고 있습니다. 따라서 타인에게 본인의 아이디와 비밀번호를 알려주어서는 아니 되며, 작업 종료 시에는 반드시 로그아웃 해주시고, 웹 브라우저의 창을 닫아주시기 바랍니다(이는 타인과 컴퓨터를 공유하는 인터넷 카페나 도서관 같은 공공장소에서 컴퓨터를 사용하는 경우에 회원의 정보의 보호를 위하여 필요한 사항입니다.)
        
        제 7 조 (회원의 정보 보안)
        ① 가입 신청자가 당 사이트 서비스 가입 절차를 완료하는 순간부터 회원은 입력한 정보의 비밀을 유지할 책임이 있으며, 회원의 아이디와 비밀번호를 타인에게 제공하여 발생하는 모든 결과에 대한 책임은 회원 본인에게 있습니다.
        ② 아이디와 비밀번호에 관한 모든 관리의 책임은 회원에게 있으며, 회원의 아이디나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는 즉시 당 사이트에 신고하여야 합니다. 신고를 하지 않음으로 인한 모든 책임은 회원 본인에게 있습니다.
        ③ 회원은 당 사이트 서비스의 사용 종료 시마다 정확히 접속을 종료하도록 해야 하며, 정확히 종료하지 아니함으로써 제3자가 이용자 또는 회원에 관한 정보를 이용하게 되는 등의 결과로 인해 발생하는 손해 및 손실에 대하여 당 사이트는 책임을 부담하지 아니합니다.
        
        제 8 조 (서비스 이용시간)
        ① 서비스 이용시간은 당 사이트의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
        ② 제1항의 이용시간은 정기점검 등의 필요로 인하여 당 사이트가 정한 날 또는 시간 및 예기치 않은 사건사고로 인한 시간은 예외로 합니다.
        
        제 9 조 (서비스의 중지 및 정보의 저장과 사용)
        ① 당 사이트 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 국가의 비상사태, 정전, 당 사이트의 관리 범위 외의 서비스 설비 장애 및 기타 불가항력에 의하여 보관되지 못하였거나 삭제된 경우, 전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에 당 사이트는 관련 책임을 부담하지 아니합니다.
        ② 당 사이트가 정상적인 서비스 제공의 어려움으로 인하여 일시적으로 서비스를 중지하여야 할 경우에는 서비스 중지 1주일 전의 고지 후 서비스를 중지할 수 있으며, 이 기간 동안 이용자가 고지내용을 인지하지 못한 데 대하여 당 사이트는 책임을 부담하지 아니합니다. 부득이한 사정이 있을 경우 위 사전 고지기간은 감축되거나 생략될 수 있습니다. 또한 위 서비스 중지에 의하여 본 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 보관되지 못하였거나 삭제․전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에 대하여도 당 사이트는 책임을 부담하지 아니합니다.
        ③ 당 사이트의 사정으로 서비스를 영구적으로 중단하여야 할 경우 제2항에 의거합니다. 다만, 이 경우 사전 고지기간은 1개월로 합니다.
        ④ 당 사이트는 사전 고지 후 서비스를 일시적으로 수정, 변경 및 중단할 수 있으며, 이에 대하여 이용자 또는 제3자에게 어떠한 책임도 부담하지 아니합니다.
        ⑤ 당 사이트는 이용자가 본 약관의 내용에 위배되는 행동을 한 경우, 임의로 서비스 사용을 제한 및 중지할 수 있습니다. 이 경우 당 사이트는 위 이용자의 접속을 금지할 수 있습니다.
        ⑥ 장기간 휴면 회원인 경우 안내 메일 또는 공지사항 발표 후 1주일간의 통지 기간을 거쳐 서비스 사용을 중지할 수 있습니다.
        
        제 10 조 (서비스의 변경 및 해지)
        ① 당 사이트는 이용자가 서비스를 이용하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않으며, 회원이 본 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다.
        ② 당 사이트는 서비스 이용과 관련하여 가입자에게 발생한 손해 중 가입자의 고의, 과실에 의한 손해에 대하여 책임을 부담하지 아니합니다.
        ③ 회원을 탈퇴하고자 하는 경우에는 당 사이트 로그인 후 회원탈퇴 절차에 따라 해지할 수 있습니다.
        
        제 11 조 (정보 제공 및 홍보물 게재)
        ① 당 사이트는 서비스를 운영함에 있어서 각종 정보를 서비스에 게재하는 방법 등으로 회원에게 제공할 수 있습니다.
        ② 당 사이트는 서비스에 적절하다고 판단되거나 활용 가능성 있는 홍보물을 게재할 수 있습니다.
        
        제 12 조 (게시물의 저작권)
        ① 이용자가 게시한 게시물의 내용에 대한 권리는 이용자에게 있습니다.
        ② 당 사이트는 게시된 내용을 사전 통지 없이 편집, 이동할 수 있는 권리를 보유하며, 다음의 경우 사전 통지 없이 삭제할 수 있습니다.
         1. 본 이용약관에 위배되거나 상용 또는 불법, 음란, 저속하다고 판단되는 게시물을 게시한 경우
         2. 다른 이용자 또는 제 3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우
         3. 공공질서 및 미풍양속에 위반되는 내용인 경우
         4. 범죄적 행위에 결부된다고 인정되는 내용일 경우
         5. 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우
         6. 기타 관계 법령에 위배되는 경우
        ③ 이용자의 게시물이 타인의 저작권을 침해함으로써 발생하는 민․형사상의 책임은 전적으로 이용자가 부담하여야 합니다.
        
        제 13 조 (이용자의 행동규범 및 서비스 이용제한)
        ① 이용자가 제공하는 정보의 내용이 허위인 것으로 판명되거나, 그러하다고 의심할 만한 합리적인 사유가 발생할 경우 당 사이트는 이용자의 본 서비스 사용을 일부 또는 전부 중지할 수 있으며, 이로 인해 발생하는 불이익에 대해 책임을 부담하지 아니합니다.
        ② 이용자가 당 사이트 서비스를 통하여 게시, 전송, 입수하였거나 전자메일 기타 다른 수단에 의하여 게시, 전송 또는 입수한 모든 형태의 정보에 대하여는 이용자가 모든 책임을 부담하며 당 사이트는 어떠한 책임도 부담하지 아니합니다.
        ③ 당 사이트는 당 사이트가 제공한 서비스가 아닌 가입자 또는 기타 유관기관이 제공하는 서비스의 내용상의 정확성, 완전성 및 질에 대하여 보장하지 않습니다. 따라서 당 사이트는 이용자가 위 내용을 이용함으로 인하여 입게 된 모든 종류의 손실이나 손해에 대하여 책임을 부담하지 아니합니다.
        ④ 이용자는 본 서비스를 통하여 다음과 같은 행동을 하지 않는데 동의합니다.
         1. 타인의 아이디와 비밀번호를 도용하는 행위
         2. 저속, 음란, 모욕적, 위협적이거나 타인의 사생활을 침해할 수 있는 내용을 전송, 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위
         3. 서비스를 통하여 전송된 내용의 출처를 위장하는 행위
         4. 법률, 계약에 의하여 이용할 수 없는 내용을 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위
         5. 타인의 특허, 상표, 영업비밀, 저작권, 기타 지적재산권을 침해하는 내용을 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위
         6. 당 사이트의 승인을 받지 아니한 광고, 판촉물, 정크메일, 스팸, 행운의 편지, 피라미드 조직 기타 다른 형태의 권유를 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위
         7. 다른 이용자의 개인정보를 수집 또는 저장하는 행위
        ⑤ 당 사이트는 회원이 본 약관을 위배했다고 판단되면 서비스와 관련된 모든 정보를 이용자의 동의 없이 삭제할 수 있습니다.
        ⑥ 제1항의 규정에 의하여 서비스의 제한을 받게 된 이용자가 위 조치에 대한 이의가 
        있을 경우에는 이의신청을 할 수 있으나 서비스 제한 시 삭제된 이용자의 데이터에 대해서는 책임지지 아니합니다. 
        ⑦ 당 사이트는 제6항의 규정에 의한 이의신청에 대하여 그 확인이 완료될 때까지 이용제한을 연기할 수 있습니다.
        
        제 3 장 의무 및 책임
        
        제 14 조 (당 사이트의 의무)
        ① 당 사이트는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력할 의무가 있습니다.
        ② 당 사이트는 회원의 개인 신상 정보를 본인의 승낙 없이 타인에게 누설, 배포하지 않습니다. 다만, 전기통신관련법령 등 관계법령에 의하여 관계 국가기관 등의 요구가 있는 경우에는 그러하지 아니합니다.
        ③ 당 사이트는 이용자가 안전하게 당 사이트 서비스를 이용할 수 있도록 이용자의 개인정보 (신용정보 포함) 보호를 위한 보안시스템을 갖추어야 합니다.
        ④ 당 사이트는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.
        
        제 15 조 (회원의 의무)
        ① 회원 가입시에 요구되는 정보는 정확하게 기입하여야 합니다. 또한 이미 제공된 회원에 대한 정보가 정확한 정보가 되도록 유지, 갱신하여야 하며, 회원은 자신의 아이디 및 비밀번호를 제3자에게 이용하게 해서는 안 됩니다.
        ② 회원은 당 사이트의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다.
        ③ 회원은 당 사이트 서비스를 이용하여 얻은 정보를 당 사이트의 사전승낙 없이 복사, 복제, 변경, 번역, 출판·방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.
        ④ 이용자는 당 사이트 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안 됩니다.
         1. 다른 회원의 아이디를 부정 사용하는 행위
         2. 범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위
         3. 선량한 풍속, 기타 사회질서를 해하는 행위
         4. 타인의 명예를 훼손하거나 모욕하는 행위
         5. 타인의 지적재산권 등의 권리를 침해하는 행위
         6. 해킹행위 또는 컴퓨터바이러스의 유포행위
         7. 타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위
         8. 서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위
         9. 당 사이트에 게시된 정보의 변경
        
        제 4 장 기 타
        
        제 16 조 (당 사이트의 소유권)
        ① 당 사이트가 제공하는 서비스, 그에 필요한 소프트웨어, 이미지, 마크, 로고, 디자인, 서비스명칭, 정보 및 상표 등과 관련된 지적재산권 및 기타 권리는 당 사이트에 소유권이 있습니다.
        ② 이용자는 당 사이트가 명시적으로 승인한 경우를 제외하고는 전항의 소정의 각 재산에 대한 전부 또는 일부의 수정, 대여, 대출, 판매, 배포, 제작, 양도, 재라이센스, 담보권 설정 행위, 상업적 이용 행위를 할 수 없으며, 제3자로 하여금 이와 같은 행위를 하도록 허락할 수 없습니다.
        
        제 17 조 (양도금지)
        회원이 서비스의 이용권한, 기타 이용계약 상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
        
        제 18 조 (손해배상)
        당 사이트는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 당 사이트가 고의로 행한 범죄행위를 제외하고 이에 대하여 책임을 부담하지 아니합니다.
        
        제 19 조 (면책조항)
        ① 당 사이트는 서비스에 표출된 어떠한 의견이나 정보에 대해 확신이나 대표할 의무가 없으며 회원이나 제3자에 의해 표출된 의견을 승인하거나 반대하거나 수정하지 않습니다. 당 사이트는 어떠한 경우라도 회원이 서비스에 담긴 정보에 의존해 얻은 이득이나 입은 손해에 대해 책임이 없습니다.
        ② 당 사이트는 회원간 또는 회원과 제3자간에 서비스를 매개로 하여 물품거래 혹은 금전적 거래 등과 관련하여 어떠한 책임도 부담하지 아니하고, 회원이 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다.
        
        제 20 조 (관할법원)
        본 서비스 이용과 관련하여 발생한 분쟁에 대해 소송이 제기될 경우 대전지방법원을 전속적 관할 법원으로 합니다.
        
        부 칙
        (시행일) 본 약관은 2018년 8월 1일부터 시행됩니다. 개정된 약관의 적용일자 이전 이용자 또는 회원은 개정된 이용약관의 적용을 받습니다.</p>
        <button onclick="window.close()">닫기</button>
      </body>
      </html>
    `);
  };

  const handleAgree1 = (e) => {
    setAgree1(e.target.checked);
    onAgree(1, e.target.checked); // 부모 컴포넌트로 체크 상태 전달
  };

  const handleAgree2 = (e) => {
    setAgree2(e.target.checked);
    onAgree(2, e.target.checked); // 부모 컴포넌트로 체크 상태 전달
  };

  return (
    <div className="space-y-5 border p-4">
      <div className="policy-box2">
        <h3 className="inline-flex font-semibold text-start text-xl mb-5 mr-5">
          1. 서비스 이용 약관
        </h3>
        <div
          className="text-xs inline-flex ml-5 border cursor-pointer p-2"
          onClick={handlePopup1}
        >
          자세히 보기
        </div>
        <div className="agree-box">
          <label className="flex items-start justify-start font-semibold cursor-pointer label">
            <input
              type="checkbox"
              checked={agree1}
              onChange={handleAgree1}
              className="checkbox checkbox-warning mr-2"
            />
            [필수] 서비스 이용약관에 동의합니다.
          </label>
        </div>
      </div>

      <div className="policy-box">
        <h3 className="inline-block font-semibold text-start text-xl mb-5 mr-5">
          2. 개인정보 이용 약관
        </h3>
        <div
          className="text-xs inline-block border cursor-pointer p-2"
          onClick={handlePopup2}
        >
          자세히 보기
        </div>
        <div className="agree-box">
          <label className="flex items-start justify-start font-semibold cursor-pointer label">
            <input
              type="checkbox"
              checked={agree2}
              onChange={handleAgree2}
              className="checkbox checkbox-warning mr-2"
            />
            [필수] 개인정보 이용약관에 동의합니다.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Popup;
