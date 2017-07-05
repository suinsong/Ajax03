$(document).ready(function() {

	
	$('#newBtn').click(function(){
		$('input').val('');
		$('#saveBtn').tex('추가')
		
		
	})
	
	
	
	$('#deleteBtn').click(function() {
		if ($('#id').val() == '') {
			alert('삭제할 항목을 선택하세요');
			return

		}
		if (confirm($('#strName').val() + '\n' + '정보를 삭제하시겠습니까?')) {
			$.post('/delete', {
				id : $('#id').val()
			}, function(result) {
				$('#listBtn').click();
				$('input').val('')
			})
		}
	})

	$('#saveBtn').click(function() {
		if ($('#strNum').val() == '') {
			alert('학번은 반드시 입력해야 합니다')
			$('strNum').focus();
			return;
		}
		if ($('#strName').val() == '') {
			alert('이름은 반드시 입력해야 합니다')
			$('strName').focus();
			return;
		}
		if ($('#id').val() == '') {
			$.post('/insert', $('form').serialize(), function(result) {
				$('#listBtn').click()// insert 후 서버로부터 ok가 오면 그때 리스트 보여줌

				$('input').val('');

			})

		} else {
			$.post('/update', $('form').serialize(), function(result) {
				$('#view-list').html(result);
			})

		}

	})

	$('#listBtn').click(function() {

		$.get('/list', function(result) {
			$('#view-list').html(result);
		})

	})

})
